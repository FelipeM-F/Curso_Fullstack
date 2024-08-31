import * as jose from 'jose';

const SECRET_KEY = new TextEncoder().encode(
  'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'
);
const ALGORITHM = 'HS256';

const generateJwtToken = async () => {
  const jwt = await new jose.SignJWT()
    .setProtectedHeader({ alg: ALGORITHM })
    .setIssuedAt()
    .setExpirationTime('0.5h')
    .sign(SECRET_KEY);

  return jwt;
};

export const checkingJwtToken = async (token) => {
  try {
    const { payload } = await jose.jwtVerify(token, SECRET_KEY);
    return payload;
  } catch (error) {
    console.error('Token verification failed:', error.message);
    return null; // Retornando `null` em vez de `false`
  }
}

export default generateJwtToken;
