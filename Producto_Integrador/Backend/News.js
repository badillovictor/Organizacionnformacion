document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'd0104525765e4b7db981a8402e5449bb';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=1&apiKey=${apiKey}`
    const newsArticleElement = document.getElementById('news-article');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.articles && data.articles.length > 0) {
                const article = data.articles[0];
                const title = article.title || 'No Title';
                const description = article.description || 'No Description';
                const imageUrl = article.urlToImage || 'placeholder_image.png';
                const articleUrl = article.url || '#';

                newsArticleElement.innerHTML = `
                    <h2>${title}</h2>
                    <img src="${imageUrl}" alt="${title}" class="article-image">
                    <p class="article-description">${description}</p>
                    <a href="${articleUrl}" target="_blank" class="article-link">Leer articulo</a>
                `;
            } else {
                newsArticleElement.innerHTML = '<p>No noticias.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            newsArticleElement.innerHTML = '<p>Error al cargar noticias.</p>';
        });
});