console.log("Welcome to movie app !");

// Search Bar and Movie Container !
const search = document.getElementById("search_movie");
const movie_container = document.getElementById("container");

search.addEventListener("input",function(){
    // console.log("Hit !");
    console.log(search.value);

    // Fetch data with search value !
    const movieName = search.value;

    fetch('http://www.omdbapi.com/?s='+movieName+'&apikey=<key>')
    .then(response=>response.json())
    .then(
        function(data){
        // console.log(data);  //Data coming from omdb api !
        print(data);
    }
    )
    .catch(      //If any error happens while requesting, then it will catch all errors !
        function(err){
            console.log(err);
        }
    );
});


// Print Searched Movies !

function print(movieData){
    console.log("Under Print Function :",movieData.Search);

    // const movies = movieData.search;

    let html = "";
    movieData.Search.forEach(element => {
        console.log("Posters :",element.Poster);

        html += `<div class="box-1">
                    <div class="image">
                    <img src="${element.Poster}"
                            height="300px" width="400px" alt="">
                </div>
                <div class="name">
                    <h2>${element.Title}</h2>
                </div>
                <div class="button">
                    <a href="/details.html?id=${element.imdbID}" onclick="getID(${element.imdbID})"><button>View <i class="fa fa-eye" aria-hidden="true"></i></button></a>
                </div>
            </div>
        `;
    });

    movie_container.innerHTML = html;

};
// http://www.omdbapi.com/?apikey=[yourkey]&

// fetch('http://www.omdbapi.com/?s=Avengers&apikey=2f5d5ac5')
//     .then(response=>response.json())
//     .then(
//         function(data){
//         console.log(data);  //Data coming from omdb api !
//     }
//     )
//     .catch(      //If any error happens while requesting, then it will catch all errors !
//         function(err){
//             console.log(err);
//         }
//     );