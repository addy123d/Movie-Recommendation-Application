// Collect movie ID from URL !
const url = window.location.href;
console.log("URL :",url);
const url_string = new URL(url);
const id = url_string.searchParams.get("id");
console.log("ID :",id);

// Container
const movie_container = document.querySelector(".container");
const movie_title = document.querySelector(".title");

window.addEventListener("load",function(){
    fetch('http://www.omdbapi.com/?i='+id+'&apikey=<key>')
    .then(response=>response.json())
    .then(
        function(data){
        print(data);  //Data coming from omdb api !
    }
    )
    .catch(      //If any error happens while requesting, then it will catch all errors !
        function(err){
            console.log(err);
        }
    );
})


function print(movieData){
    console.log(movieData);

    // Plot this data to HTML !

    let html = "";
 
         html = ` <div class="poster">
                            <img src="${movieData.Poster}"
                                alt="">
                        
                            <div class="title">
                                <h2>${movieData.Title}</h2>
                            </div>
                      </div>
                        <div class="details">
                                <div class="actors">
                                    <h2>Actors: <span>${movieData.Actors}</span></h2>
                                </div>
                                <div class="director">
                                    <h2>Director: <span>${movieData.Director}</span></h2>
                                </div>
                                <div class="genre">
                                    <h2>Genre: <span>${movieData.Genre}</span></h2>
                                </div>
                                <div class="plot">
                                    <h2>Plot: <span>${movieData.Plot}</span></h2>
                                </div>
                                <div class="release">
                                    <h2>Released: <span>${movieData.Released}</span></h2>
                                </div>
                                <div class="rating">
                                    <h2>Ratings</h2>
                                    <ul>
                                        <li>${movieData.Ratings[0].Source}: ${movieData.Ratings[0].Value}</li>
                                        <li>${movieData.Ratings[1].Source}: ${movieData.Ratings[1].Value}</li>
                                    </ul>
                                </div>
                                <div class="imdb">
                                    <h2>IMDB: <span>${movieData.imdbRating}</span></h2>
                                </div>
                        </div>`;

    movie_container.innerHTML = html;
}