const { OpenAI } = require('openai');

const openai = new OpenAI('votre-api-key');

// Utilisation de la fonction `completions` pour générer un nom de portefeuille
openai.completions({
  model: 'text-davinci-002',
  prompt: 'What are 10 unique and innovative wallet names?',
  temperature: 0.5,
  max_tokens: 6,
  top_p: 1,
  frequency_penalty: 0.5
}).then((response) => {
  const names = response.data.choices.map((choice) => choice.text);
  console.log('Noms de portefeuilles générés :');
  console.log(names);
});
