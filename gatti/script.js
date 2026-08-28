fetch("https://api.thecatapi.com/v1/images/search?limit=1")
  .then(response => response.json())
  .then(data => {
    const hero = document.querySelector(".hero");
    hero.style.backgroundImage =
      `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${data[0].url}')`;
  });