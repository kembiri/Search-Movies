function searchMovie() {
  const title = document.getElementById('searchInput').value;
  const apiKey = 'bc72c3a4';
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const result = document.getElementById('result');
      if (data.Response === "True") {
        result.innerHTML = data.Search.map(movie => `
          <div>            
            <img src="${movie.Poster}" alt="${movie.Title}" width="100">
            <h3>${movie.Title} (${movie.Year})</h3>
          </div>
        `).join('');
      } else {
        result.innerHTML = `<p>${data.Error}</p>`;
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

document.getElementById('searchInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    searchMovie();
  }
});
