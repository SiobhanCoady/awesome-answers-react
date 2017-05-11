const DOMAIN = 'http://localhost:3000';
const API_TOKEN = 'IKSUSi1n_gvztP2zyFM4OQlOh-3R5E_zsgUPxH1oMIA';

function getQuestions() {
  return fetch(`${DOMAIN}/api/v1/questions?api_token=${API_TOKEN}`)
    .then(function(res) { return res.json() })
}

function getQuestion(id) {
  return fetch(`${DOMAIN}/api/v1/questions/${id}?api_token=${API_TOKEN}`)
    .then(function(res) { return res.json() })
}

function postQuestion(questionParams) {
  return fetch(
    `${DOMAIN}/api/v1/questions?api_token=${API_TOKEN}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({question: questionParams})
    }
  )
}

export { getQuestions, getQuestion, postQuestion };
