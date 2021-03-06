var baseUrl = new URL("https://Games-world.herokuapp.com/games");
var joc;



function getGames() {



    fetch(baseUrl.href, { method: "GET" })

    .then(
            function(response) {

                return response.json();
            }
        )
        .then(function(jsonResp) {

            joc = jsonResp;

            //joc.forEach(function(element) 
            for (var i = 0; i < 8; i++) {


                dysplayGames(joc[i])

            }
        })
        .catch(function() { displayError("Something went wrong! Try again!"); })

    .finally(hideLoader);

};


getGames()
displayLoader()

function dysplayGames(joc)


{

    var games = document.getElementById("games");


    var lista = document.createElement("li");

    var titlu = document.createElement("h3");

    var descriere = document.createElement("h5");

    img = document.createElement("img");

    img.setAttribute("src", joc.imageUrl);


    titlu.innerHTML = joc.title;
    descriere.innerHTML = joc.description;

    games.appendChild(lista);
    lista.appendChild(titlu);
    lista.appendChild(img);
    lista.appendChild(descriere);
}


function displayError(errorMessage) {
    var errorDiv = document.getElementById('errorDiv');
    errorDiv.innerText = errorMessage
}


function displayLoader() {

    var loader = document.getElementsByClassName("loader")[0];
    loader.style.display = "block";
}

function hideLoader() {
    var loader = document.getElementsByClassName("loader")[0];
    loader.style.display = "none";
}