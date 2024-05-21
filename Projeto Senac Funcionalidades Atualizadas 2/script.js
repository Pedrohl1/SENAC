  // function displayPlacesByCategory(category) {
  //   const resultsDiv = document.getElementById('results');
  //   resultsDiv.innerHTML = '';
  
  //   const places = placesDatabase.filter(place => place.category === category);
  
  //   if (places.length === 0) {
  //     resultsDiv.innerHTML = 'Nenhum resultado encontrado.';
  //   } else {
  //     const ul = document.createElement('ul');
  //     places.forEach(place => {
  //       const li = document.createElement('li');
  //       const img = document.createElement('img');
  //       img.src = `images/${place.image}`;
  //       img.alt = place.name;
  //       li.appendChild(img);
  //       li.textContent = place.name;
  //       ul.appendChild(li);
  //     });
  //     resultsDiv.appendChild(ul);
  //   }
  
  //   // Ocultar os locais em destaque ao exibir os resultados da categoria selecionada
  //   const initialPlacesDiv = document.getElementById('initialPlaces');
  //   initialPlacesDiv.style.display = 'none';
  // }

  let placesDatabase = [];

  async function loadPlacesDatabase() {
    try {
      const response = await fetch('placesDatabase.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      placesDatabase = await response.json();
      displayFeaturedPlaces(); // Chama displayFeaturedPlaces após carregar os dados
    } catch (error) {
      console.error('Failed to load places database:', error);
    }
  }
  
  function displayFeaturedPlaces() {
    const featuredPlacesDiv = document.getElementById('featuredPlaces');
    const pointsOfInterest = placesDatabase.filter(place => {
      // Filtrar os locais em destaque que pertencem à categoria de pontos turísticos
      return place.category === 'pontos_turisticos';
    });
  
    pointsOfInterest.forEach(place => {
      const placeDiv = document.createElement('div');
      placeDiv.classList.add('place-item');
  
      const url = document.createElement('a');
      const img = document.createElement('img');
      img.src = `images/${place.image}`;
      img.alt = place.name;
      url.href = place.url;
      url.appendChild(img);
      placeDiv.appendChild(url);
  
      const placeName = document.createElement('p');
      placeName.textContent = place.name;
      placeDiv.appendChild(placeName);
  
      // Adicionar estilo do cursor ao passar o mouse sobre as imagens
      placeDiv.addEventListener('mouseover', () => {
        placeDiv.style.cursor = 'pointer';
      });
  
      // Remover estilo do cursor quando o mouse não estiver sobre as imagens
      placeDiv.addEventListener('mouseout', () => {
        placeDiv.style.cursor = 'default';
      });
  
      // Substituir displayPlacesByCategory por searchPlaces para exibir locais da mesma categoria ao clicar
      placeDiv.addEventListener('click', () => {
        searchPlaces(place.category);
      });
  
      featuredPlacesDiv.appendChild(placeDiv);
    });
  }
  
  function search() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim().toLowerCase();
  
    // Simulação de pesquisa em todos os locais do banco de dados
    const filteredResults = placesDatabase.filter(place =>
      place.name.toLowerCase().includes(query)
    ).slice(0, 20); // Limitar a 20 resultados
  
    displayResults(filteredResults);
  
    // Ocultar os locais em destaque
    const initialPlacesDiv = document.getElementById('initialPlaces');
    initialPlacesDiv.style.display = 'none';
  }
  
  function displayResults(results) {
    const resultsDiv = document.querySelector('.results-container');
    resultsDiv.innerHTML = '';
  
    if (results.length === 0) {
      resultsDiv.innerHTML = 'Nenhum resultado encontrado.';
    } else {
      results.forEach(result => {
        const div = document.createElement('div');
        const url = document.createElement('a');
        const img = document.createElement('img');
        url.href = result.url;
        img.src = `images/${result.image}`;
        img.alt = result.name;
        url.appendChild(img);
        div.appendChild(url);
  
        const placeName = document.createElement('p');
        placeName.innerHTML = `<strong>${result.name}</strong>`;
        div.appendChild(placeName);
  
        resultsDiv.appendChild(div);
      });
    }
  }
  
  function searchPlaces(type) {
    if (type === 'restaurantes' || type === 'eventos' || type === 'pontos_turisticos') {
      const places = placesDatabase.filter(place => place.category === type);
      displayResults(places);
    }
  
    // Ocultar os locais em destaque ao realizar a pesquisa
    const initialPlacesDiv = document.getElementById('initialPlaces');
    initialPlacesDiv.style.display = 'none';
  }
  
  function clearResults() {
    const resultsDiv = document.querySelector('.results-container');
    resultsDiv.innerHTML = '';
  
    // Exibir novamente os locais em destaque
    const initialPlacesDiv = document.getElementById('initialPlaces');
    initialPlacesDiv.style.display = 'block';
  }
  
  // Exibe os locais em destaque ao carregar a página
  window.onload = () => {
    loadPlacesDatabase(); // Carregar o banco de dados JSON
  
    // Adiciona um estilo ao cursor quando o passar sobre o título, indicando o seu atributo "clicável"
    const mainTitle = document.getElementById('mainTitle');
    mainTitle.addEventListener('mouseover', () => {
      mainTitle.style.cursor = 'pointer';
    });
  
    // Remove o estilo quando o mouse não estiver sobre o título
    mainTitle.addEventListener('mouseout', () => {
      mainTitle.style.cursor = 'default';
    });
  };
  
  function reloadPage() {
    location.replace('/Projeto Senac Funcionalidades Atualizadas 2/index.html');
  }
  
  function homePage() {
    location.replace('/Projeto Senac Funcionalidades Atualizadas 2/home.html');
  }
  
  function loadPagePlaceItem() {
    const places = document.getElementById('featuredPlaces').querySelectorAll('p');
    console.log(places);
    for (let i = 0; i < places.length; i++) {
      // Implement logic for each place item
    }
  }
  