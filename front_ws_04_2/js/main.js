/*document.addEventListener('DOMContentLoaded',function(){
  // 찜 목록을 표시할 요소
  const jjimTag = document.getElementById("movie-jjim");

  // 로컬스토리지에서 찜 영화 목록 가져오기
  const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
  
  if(savedMovies.length>0){
    savedMovies.forEach(movie=>{
      const movieP = document.createElement('p');
      movieP.innerText = `${movie.title} | ${movie.genre} | ${movie.director} | ${movie.runningTime}분`;
      jjimTag.appendChild(movieP);
    })
  }
})*/



// 홈화면 영화 리스트
document.addEventListener('DOMContentLoaded', () => {
  
  // 영화 목록
  fetch('./data/movie.json')
      .then(response => response.json())
      .then(data => {
          const movieList = document.getElementById('movie-list');

          data.forEach(movie => {
              // Create the movie list item
              const li = document.createElement('li');

              const img = document.createElement('img');
              img.src = `./img/${movie.img}`;
              img.alt = movie.title;

              const movieInfoDiv = document.createElement('div');
              movieInfoDiv.className = 'movie-info';

              const infoDiv = document.createElement('div');

              const titleP = document.createElement('p');
              titleP.innerText = movie.title;

              const hr = document.createElement('hr');

              const genreP = document.createElement('p');
              genreP.innerText = `장르: ${movie.genre}`;

              const directorP = document.createElement('p');
              directorP.innerText = `감독: ${movie.director}`;

              const runningTimeP = document.createElement('p');
              runningTimeP.innerText = `러닝 타임: ${movie.runningTime}분`;

              const button = document.createElement('button');
              button.innerText = '찜';

              button.addEventListener('click',function(){
                saveToLocalStorage(movie);
              })

              // Append elements
              infoDiv.appendChild(titleP);
              infoDiv.appendChild(hr);
              infoDiv.appendChild(genreP);
              infoDiv.appendChild(directorP);
              infoDiv.appendChild(runningTimeP);

              movieInfoDiv.appendChild(infoDiv);
              movieInfoDiv.appendChild(button);

              li.appendChild(img);
              li.appendChild(movieInfoDiv);
              
              movieList.appendChild(li);
          });
      })
      .catch(error => console.error('Error fetching movie data:', error));
});

// localStorage에 찜 추가 및 찜 목록 보여주기
function saveToLocalStorage(movie){
  let savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
  
  // 중복 체크
  const movieExists = savedMovies.some(savedMovies=>savedMovies.title === movie.title);

  if(!movieExists){
    savedMovies.push(movie);
    localStorage.setItem('savedMovies',JSON.stringify(savedMovies));
  }

  // 찜 목록을 표시할 요소
  const jjimTag = document.getElementById("movie-jjim");

  // 로컬스토리지에서 찜 영화 목록 가져오기
  savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
  jjimTag.innerText=""
  if(savedMovies.length>0){
    savedMovies.forEach(movie=>{
      const movieP = document.createElement('p');
      movieP.innerText = `${movie.title} | ${movie.genre} | ${movie.director} | ${movie.runningTime}분`;
      jjimTag.appendChild(movieP);
    })
  }
}





