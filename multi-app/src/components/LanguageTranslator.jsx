import { useState } from 'react'; 
import axios from 'axios';
import styled from 'styled-components';

// Define o estilo dos componentes de apresentação
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 50px auto;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

const Label = styled.label`
  color: #555;
  font-size: 16px;
  margin-right: 10px;
`;

const Select = styled.select`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const TranslatedText = styled.p`
  color: #333;
  font-size: 18px;
  background: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
`;

// Serviço de tradução separado
const translateService = async (text, sourceLang, targetLang) => {
  try {
    const response = await axios.get('https://api.mymemory.translated.net/get', {
      params: {
        q: text,
        langpair: `${sourceLang}|${targetLang}`,
      },
    });
    return response.data.responseData.translatedText;
  } catch (error) {
    throw new Error('Erro ao traduzir o texto');
  }
};

// Componente principal LanguageTranslator
const LanguageTranslator = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Função para traduzir o texto com feedback de carregamento e gerenciamento de erros
  const translateText = async () => {
    if (!text.trim()) {
      setError('Por favor, insira o texto para tradução.');
      return;
    }

    setLoading(true);
    setError('');
    setTranslatedText('');

    try {
      const translation = await translateService(text, sourceLang, targetLang);
      setTranslatedText(translation);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Language Translator</Title>
      <div>
        <Label>Língua de Origem:</Label>
        <Select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
          <option value="en">Inglês</option>
          <option value="es">Espanhol</option>
          <option value="fr">Francês</option>
          <option value="de">Alemão</option>
          <option value="it">Italiano</option>
          <option value="pt">Português</option>
        </Select>
      </div>
      <div>
        <Label>Língua de Destino:</Label>
        <Select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          <option value="en">Inglês</option>
          <option value="es">Espanhol</option>
          <option value="fr">Francês</option>
          <option value="de">Alemão</option>
          <option value="it">Italiano</option>
          <option value="pt">Português</option>
        </Select>
      </div>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite o texto a ser traduzido"
      />
      <Button onClick={translateText} disabled={loading}>
        {loading ? 'Traduzindo...' : 'Traduzir'}
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
    </Container>
  );
};

export default LanguageTranslator;
