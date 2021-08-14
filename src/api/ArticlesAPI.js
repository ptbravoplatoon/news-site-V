const BASE_URL = 'http://localhost:3001/api/articles';

const fetchArticleByID = async (articleID) => {
  const response = await fetch(`${BASE_URL}/${articleID}`);
  const data = await response.json();
  return data;
};

const fetchArticlesBySection = async (section) => {
  const response = await fetch(`${BASE_URL}?filter={"where":{"section":"${section}"}}`);
  const data = await response.json();
  return data;
};

const fetchArticles = async (filters = null) => {
  const url = filters ? `${BASE_URL}?filter={"where":${filters}}` : BASE_URL;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const searchArticles = async (textToSearchFor) => {
  const response = await fetch(`${BASE_URL}?filter={"where":{"title":{"ilike":"${textToSearchFor}"}}}`)
  const data = await response.json();
  return data;
}

const addArticle = async (articleObject) => {

  console.log('addArticle called')
  const context = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(articleObject)
  }

  const response = await fetch(BASE_URL, context)
  const responseBody = await response.json()
  return responseBody

}

export {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection,
  searchArticles,
  addArticle
};
