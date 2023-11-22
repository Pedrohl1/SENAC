__Membros do grupo:__

GUILHERME ARAUJO BARBOSA LIMA  
BARBARA BORGES DA SILVA  
GABRIEL DE SOUZA LIMA  
ERICA GABRIELLY VITORINO DE OLIVEIRA  
PEDRO HENRIQUE LIMA DOS SANTOS  
RAYANE THAIS GOMES DE LIMA FRANCE  

# __Discovery PE - Aplicativo para incentivo ao turismo e cultura de Pernambuco__

## **Visão Geral**

O Discovery PE é um aplicativo que visa tornar a jornada de descoberta em Pernambuco enriquecedora, conveniente e totalmente adaptada aos interesses dos usuários. Ele permite explorar, aprender, saborear e se conectar com tudo o que esta maravilhosa região tem a oferecer.

## Funcionalidades Principais

- Exploração de Locais: Descubra pontos históricos, culturais, locais de entretenimento e eventos próximos.

- Gastronomia Regional: Encontre e saboreie a autêntica gastronomia pernambucana. (implementação futura)

- Eventos Vibrantes: Fique atualizado sobre eventos emocionantes em sua região. (implementação futura)

- Personalização: Escolha manualmente a área que deseja explorar e veja resultados personalizados para seus interesses.

- Privacidade Respeitada: Sem rastreamento de localização por GPS. Escolha a área que deseja pesquisar. (implementação futura com adicional do backend, API + banco de dados)

## Público-alvo

O Discovery PE atende tanto moradores locais quanto turistas interessados em explorar e conhecer mais sobre Pernambuco.

__Dificuldades Abordadas__

Muitas pessoas, incluindo moradores locais, têm falta de conhecimento sobre os diversos espaços e experiências que Pernambuco oferece, devido à má divulgação.

## Missão

Promover a cultura local e o turismo, facilitando a busca por locais de interesse, eventos e experiências únicas em Pernambuco.

__Benefícios Gerados__

- Nunca fique sem opções de lazer e cultura.

- Explore lugares incríveis, conheça a história e a arte locais, saboreie a gastronomia regional e participe de eventos variados.

- Sinta-se mais conectado com sua cidade e as pessoas que vivem nela.

__Diferencial__

- Respeito à privacidade, sem rastreamento de GPS.

- Acesso a informações completas e atualizadas sobre cada local, incluindo avaliações e comentários de outros usuários.

- Agendamento de eventos, mapas interativos, filtragem por categorias e criação de perfis com favoritos.

## Elaboração das Personas

__1 Persona: Luísa - Moradora exploradora__

Idade: 25 anos  
Profissão: Estudante de Jornalismo  
Estado Civil: Casada  
Renda: Média  
Interesses: Gosta de conhecer novos lugares em sua cidade natal  

__Potenciais Soluções__

- Listagem de eventos e atrações locais para famílias e amigos.

- Avaliações e comentários de outros moradores sobre locais familiares.

- Calendário de eventos com filtros por faixa etária.

__Comportamento__

__Necessidades:__ Descobrir novos restaurantes, bares e eventos locais para suas saídas em família e com amigos.  
__Objetivos:__ Manter-se atualizada sobre as opções de lazer locais e explorar a cidade de forma divertida.  
__Desafios:__ Encotrar informações sobre eventos locais menos divulgados, além de opções que sejam adequadas para diferentes idades e interesses.

__2 Persona: Jennifer - Turista aventureira__
Idade: 30 anos  
Profissão: Professora  
Estado civil: Solteira  
Renda: Média  
Interesses: Ama viagens e busca experiências culturais autênticas  

__Potenciais Soluções__

- Listagem de pontos histtóricos e culturais menos conhecidos.

- Recomendações de restaurantes locais autênticos.

- Notificações sobre eventos exclusivos e menos turisticos.

- Filtros de busca para encontrar lugares menos movimentados

__Comportamento__

__Necessidades:__ Encontrar locais históricos e culturais únicos, restaurantes locais autênticos e eventos interessantes.  

__Objetivos:__ Explorar a cultura local, experimentar a culinária regional e participar de eventos exclusivos.  

__Desafios:__ Dificuldade em encontrar informações precisas e atualizadas sobre locais desconhecidos bem como evitar a superlotação de pontos turisticos.  

## Proposta de Protótipo Funcional

Foram elaborados dois protótipos para o projeto: uma Homepage e uma página de pesquisa e resultados.



### Requisitos Funcionais:



__Exploração por Categoria:__

- Os usuários podem explorar diferentes categorias, como restaurantes, eventos e pontos turísticos.

- Ao clicar nas categorias, a aplicação exibe uma lista de locais correspondentes.

__Pesquisa de Locais:__

- Os usuários podem realizar pesquisas por lugares específicos usando a barra de pesquisa.

- A pesquisa retorna resultados relevantes, exibindo imagens e nomes dos locais.

- Locais em Destaque:

- A aplicação destaca locais específicos em uma seção dedicada na página inicial.

- Os locais de destaque são exibidos de forma atrativa e interativa.

__Navegação Intuitiva:__

- A navegação na aplicação é intuitiva, com botões e campos de pesquisa claramente visíveis.

- A experiência do usuário é projetada para ser fácil e amigável.

__Responsividade:__

- A aplicação é responsiva, adaptando-se a diferentes tamanhos de tela e dispositivos.

__Recarregamento da Página:__

- Os usuários podem recarregar a página com facilidade, proporcionando uma experiência de usuário contínua.

### Requisitos Não Funcionais:

__Desempenho:__

- A aplicação deve ter tempos de carregamento rápidos para garantir uma experiência ágil.

__Segurança:__

- A aplicação deve proteger os dados do usuário e garantir que as transmissões de dados sejam seguras.

__Compatibilidade do Navegador:__

- A aplicação deve ser compatível com os principais navegadores web (Chrome, Firefox, Safari, etc.).

__Estilo e Design:__

- A interface do usuário deve seguir princípios de design atraentes e estilos coerentes, garantindo uma experiência visualmente agradável.

__Manutenção Simples:__

- O código deve ser estruturado de forma a facilitar a manutenção futura, com comentários adequados e práticas de codificação limpa.

__Acessibilidade:__

- A aplicação deve ser acessível, garantindo que usuários com diferentes habilidades e necessidades possam utilizá-la.

__Escalabilidade:__

- A aplicação deve ser projetada para lidar com um aumento potencial de dados e usuários sem comprometer o desempenho.

__Usabilidade:__

- A usabilidade da aplicação deve ser intuitiva, permitindo que usuários de diferentes níveis de habilidade a utilizem sem dificuldades excessivas.

__Backup e Recuperação:__

- Mecanismos de backup e recuperação devem ser implementados para proteger os dados contra perdas acidentais.

## Arquitetura MVC



### 1. Model (Modelo):

- O arquivo script.js manipula e gerencia os dados do aplicativo, como a base de dados de locais (placesDatabase).

- As funções que filtram e organizam os lugares com base em categorias representam a lógica do modelo.

### 2. View (Visão):

- Os arquivos HTML (index.html) e CSS (styles.css) descrevem a apresentação e o layout da interface do usuário.

- A estrutura HTML e os estilos CSS fornecem a "visão" da aplicação, incluindo elementos como botões, campos de pesquisa e resultados.

### Controller (Controlador):

- O arquivo script.js também atua como o controlador, respondendo a eventos do usuário (como cliques em botões, inserção de pesquisa) e coordenando a lógica de negócios.

- Funções como searchPlaces, displayFeaturedPlaces, displayPlacesByCategory, e outras, agem como controladores que respondem às interações do usuário.

## Contribuição

Apesar de reconhecer que, para obter um projeto mais estruturado, nossa equipe precisaria ter implementado algum framework, e serve como implementação futura e mais madura do projeto o uso de Angular, React ou Vue.js, que pode fornecer uma estrutura mais robusta e modularizada.  


Para uma melhoria contínua do produto é imprescindível a utilização das demais funcionalidades: o Design e Experiência do Usuário (UX/UI), Acessibilidade, acréscimo de versões em outros idiomas como inglês e espanhol. Sempre incentivando aos usuários e membros da equipe a fornecerem sugestões para melhorias ou feedback sobre a experiência do usuário.

__Agradecimentos__  
Agradecemos a todas as pessoas desenvolvedoras que contribuíram para o desenvolvimento deste projeto.

Bárbara Borges,  
Agile Master
