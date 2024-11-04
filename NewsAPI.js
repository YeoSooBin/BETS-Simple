const apiKey = 'YOUR_API_KEY';
const searchQuery = 'technology';

fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const articles = data.articles;

    // Display the news articles on the page
    const newsContainer = document.getElementById('news-container');
    articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.innerHTML   
 = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href="${article.url}">Read   
 more</a>
      `;
      newsContainer.appendChild(articleElement);
    });
  })
  .catch(error => {
    console.error('Error fetching news:', error);
  });