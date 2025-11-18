fetch("movies.json")
  .then(res => res.json())
  .then(data => {
      const row = document.getElementById("movieRow");

      data.forEach(movie => {
          let card = document.createElement("div");
          card.classList.add("movie-card");

          card.innerHTML = `
              <img src="${movie.image}" alt="${movie.title}">
              <div class="movie-title">${movie.title}</div>
          `;

          row.appendChild(card);
      });
  });