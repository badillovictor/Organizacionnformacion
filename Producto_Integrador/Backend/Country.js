// MexicoInfo.js

document.addEventListener('DOMContentLoaded', function() {
    const countryCode = 'MX';
    const apiUrl = `https://restcountries.com/v3.1/alpha/${countryCode}`;
    const mexicoDataElement = document.getElementById('mexico-data');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.length > 0) {
                const country = data[0];
                const name = country.name.common;
                const officialName = country.name.official;
                const capital = country.capital ? country.capital[0] : 'N/A';
                const population = country.population.toLocaleString();
                const region = country.region;
                const subregion = country.subregion || 'N/A';
                const flagSvg = country.flags.svg;
                const currencies = country.currencies ? Object.values(country.currencies).map(curr => `${curr.name} (${curr.symbol})`).join(', ') : 'N/A';
                const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';

                mexicoDataElement.innerHTML = `
                    <h2>${name}</h2>
                    <img src="${flagSvg}" alt="${name} flag" class="flag">
                    <p class="info-item"><strong>Nombre Oficial:</strong> ${officialName}</p>
                    <p class="info-item"><strong>Capital:</strong> ${capital}</p>
                    <p class="info-item"><strong>Poblacion:</strong> ${population}</p>
                    <p class="info-item"><strong>Region:</strong> ${region}</p>
                    <p class="info-item"><strong>Subregion:</strong> ${subregion}</p>
                    <p class="info-item"><strong>Monedas:</strong> ${currencies}</p>
                    <p class="info-item"><strong>Idiomas:</strong> ${languages}</p>
                `;
            } else {
                mexicoDataElement.innerHTML = '<p>Could not retrieve information about Mexico.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching Mexico data:', error);
            mexicoDataElement.innerHTML = '<p>Failed to load information about Mexico.</p>';
        });
});