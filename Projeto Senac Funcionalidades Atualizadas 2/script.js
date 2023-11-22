const placesDatabase = [
  {
      name: "Recife Antigo",
      image: "recife_antigo.jpg",
      category: 'pontos_turisticos',
      url:'./pages/recife_antigo.html'
  },
  {
      name: "Olinda",
      image: "olinda.jpg",
      category: 'pontos_turisticos',
      url:'./pages/olinda.html'
  },
  {
      name: "Porto de Galinhas",
      image: "porto_de_galinhas.jpg",
      category: 'pontos_turisticos',
      url:'./pages/porto_de_galinhas.html'
  },
  {
      name: "Fernando de Noronha",
      image: "fernando_de_noronha.jpg",
      category: 'pontos_turisticos',
      url:'./pages/fernando_de_noronha.html'
  },
  {
      name: "Caruaru",
      image: "caruaru.jpg",
      category: 'pontos_turisticos',
      url:'./pages/caruaru.html'
  },
  {
      name: "Azulejo",
      image: "restaurante1.jpg",
      category: 'restaurantes'
  },
  {
      name: "Pernambuco Dream Bar ",
      image: "restaurante2.jpg",
      category: 'restaurantes'
  },
  {
      name: "PE Bar e Restaurante",
      image: "restaurante3.jpg",
      category: 'restaurantes'
  },
  {
      name: "Festa de São João ",
      image: "evento1.jpg",
      category: 'eventos'
  },
  {
      name: "Miss Pernambuco",
      image: "evento2.jpg",
      category: 'eventos'
  },
  {
      name: "Virada Cultural",
      image: "evento3.jpg",
      category: 'eventos'
  }
  // Adicione mais locais com suas categorias aqui...
]
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
    url.appendChild(img)
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

    placeDiv.addEventListener('click', () => {
      displayPlacesByCategory(place.category);
    });

    featuredPlacesDiv.appendChild(placeDiv);
  });
}

  
  function search() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
  
    // Simulação de pesquisa em todos os locais do banco de dados
    const filteredResults = placesDatabase.filter(place =>
      place.name.toLowerCase().includes(query.toLowerCase())
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
    let query = '';
  
    if (type === 'restaurantes' || type === 'eventos' || type === 'pontos_turisticos') {
      const places = placesDatabase.filter(place => place.category === type);
      displayResults(places);
    } else {
      // Caso seja necessário implementar lógica adicional para novas categorias
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
    displayFeaturedPlaces();
    
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

  function homePage(){
    location.replace('/Projeto Senac Funcionalidades Atualizadas 2/home.html');
  }

  function loadPagePlaceItem(){
    var places = document.getElementById('featuredPlaces').querySelectorAll('p');
    console.log(places);
    for(i=0;i<places.length();i++){

    }
  }