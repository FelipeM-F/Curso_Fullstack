// Define o pacote onde essa classe reside
package com.example.api_user.security;

// Importa classes do io.jsonwebtoken, que é uma biblioteca usada para gerar e analisar tokens JWT.
import com.example.api_user.service.CustomUserDetails;
import io.jsonwebtoken.Claims; // Representa as "claims" (declarações) de um token JWT. Isso inclui informações como o emissor, o assunto, a data de expiração, etc.
import io.jsonwebtoken.Jwts; // Classe usada para criar, analisar e validar tokens JWT.
import io.jsonwebtoken.SignatureAlgorithm; // Enum que define o algoritmo de assinatura usado para criptografar o token JWT (neste caso, HS256).

// Importa classes do Spring para gerenciar propriedades e autenticação.
import org.springframework.beans.factory.annotation.Value; // Permite injetar valores de propriedades do arquivo application.properties diretamente em variáveis de classe.
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails; // Interface que contém informações sobre o usuário, como nome de usuário e permissões.

// Marca a classe como um bean Spring que será gerenciado pelo contêiner de IoC (Inversão de Controle).
import org.springframework.stereotype.Component;

// Importa classes Java para manipulação de datas, mapas e funções.
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.*;
import java.util.function.Function; // Interface funcional que aplica uma transformação a um dado e retorna um resultado.
import java.util.stream.Collectors;

// Anotação @Component:
// - Indica que essa classe é um bean Spring e será gerenciada pelo contêiner de IoC.
// - Permite que o Spring injete essa classe em outros componentes ou serviços.
@Component
public class JwtTokenProvider {

    // Injeção da chave secreta usada para assinar o token JWT.
    // O valor é lido diretamente do arquivo application.properties pela anotação @Value.
    @Value("${jwt.secret}")
    private String secretKey;

    private SecretKey getSigningKey() {
        byte[] keyBytes = secretKey.getBytes();
        return new SecretKeySpec(keyBytes, SignatureAlgorithm.HS256.getJcaName());
    }

    // Método para extrair o nome de usuário (subject) do token JWT.
    // Utiliza o método extractClaim para pegar a "claim" que contém o subject (nome de usuário).
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Integer extractId(String token) {
        return extractClaim(token, claims -> claims.get("id", Integer.class ));
    }

    // Método genérico para extrair qualquer "claim" do token.
    // O parâmetro claimsResolver é uma função que define qual "claim" será extraída.
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        // Extrai todas as "claims" do token e aplica a função claimsResolver.
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    // Extrai todas as "claims" de um token JWT.
    // Esse método analisa o token, valida a assinatura com a chave secreta e retorna o corpo do JWT, que contém as claims.
    private Claims extractAllClaims(String token) {
        // Usa o parser do Jwts para decodificar e verificar o token JWT, validando a assinatura com a chave secreta.
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // Método para gerar um novo token JWT com base nos detalhes do usuário.
    // Recebe o objeto UserDetails e cria o token usando o nome de usuário como "subject".
    public String generateToken(CustomUserDetails userDetails) {
        // Cria um mapa vazio para claims (pode ser usado para adicionar informações adicionais ao token).
        Map<String, Object> claims = new HashMap<>();
                claims.put("roles", userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList()));
                claims.put("id", userDetails.getUserId());
        return createToken(claims, userDetails.getUsername());
    }

    // Método privado para criar o token JWT.
    // - claims: Mapa de declarações (claims) a serem incluídas no token.
    // - subject: O assunto (subject), geralmente o nome de usuário.
    private String createToken(Map<String, Object> claims, String subject) {
        // Cria o token JWT configurando:
        // - claims: Informações adicionais no token.
        // - subject: Nome de usuário (subject do token).
        // - issuedAt: Data de emissão do token.
        // - expiration: Data de expiração (aqui, definido para 10 horas a partir da emissão).
        // - signWith: Algoritmo de assinatura (HS256) e chave secreta para assinar o token.

            return Jwts.builder()
                    .setClaims(claims)
                    .setSubject(subject)
                    .setIssuedAt(new Date(System.currentTimeMillis()))
                    .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                    .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                    .compact();
        }

    // Método que verifica se o token é válido.
    // Compara o nome de usuário extraído do token com o nome de usuário do UserDetails e verifica se o token não expirou.
    public boolean isTokenValid(String token, CustomUserDetails userDetails) {
        final String username = extractUsername(token);
        final Integer id = extractId(token);
        return (username.equals(userDetails.getUsername()) && id.equals(userDetails.getUserId()) && !isTokenExpired(token)); // Verifica se o token não expirou e se o usuário é o correto
    }

    // Método privado para verificar se o token JWT expirou.
    // Compara a data de expiração do token com a data atual.
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date()); // Verifica se a data de expiração é anterior à data atual
    }

    // Extrai a data de expiração do token JWT.
    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration); // Extrai a claim de expiração (expiration)
    }
}