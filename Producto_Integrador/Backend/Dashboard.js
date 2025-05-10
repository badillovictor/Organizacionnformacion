document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'HB2s8ns78YDhaLhis5YerdUjeBxVGvxCJUqN69C7'; // NO COPIAR porfavor
    const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    const apodImageElement = document.getElementById('apod-image');
    const apodTitleElement = document.getElementById('apod-title');
    const apodExplanationElement = document.getElementById('apod-explanation');
    const apodContainerElement = document.getElementById('apod-container');

    fetch(apodUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.media_type === 'image') {
                apodImageElement.src = data.url;
                apodImageElement.alt = data.title;
                apodTitleElement.textContent = data.title;
                apodExplanationElement.textContent = data.explanation;
            } else if (data.media_type === 'video') {
                // Handle video content if the APOD is a video
                apodContainerElement.innerHTML = `
                    <h2>${data.title}</h2>
                    <iframe width="560" height="315" src="${data.url}" frameborder="0" allowfullscreen></iframe>
                    <p>${data.explanation}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching APOD:', error);
            apodContainerElement.innerHTML = '<p>ERROR#</p>';
        });
});