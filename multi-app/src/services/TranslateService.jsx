import axios from 'axios';

const translateService = async (text, sourceLang, targetLang) => {
  const options = {
    method: 'POST',
    url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/text',
    headers: {
      'x-rapidapi-key': 'c8d5f4596dmsh117fc0e83658b13p16de34jsn741c4c1b66df',
      'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      from: sourceLang,
      to: targetLang,
      text: text
    }
  };

  try {
    const response = await axios.request(options);
    console.log('Resposta completa da API:', response.data); // Verifica a resposta completa da API
    return response.data.trans; // Acesse o campo correto da resposta
  } catch (error) {
    console.error('Erro ao traduzir o texto:', error);
    throw new Error('Erro ao traduzir o texto');
  }
};

export default translateService;
