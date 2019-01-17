var APImeter;
var x = window.location.href;
console.log(x);
var movies=[];

$(".movienumbers").each(function() {
  movies.push($(this).data("index"));
});

console.log(movies);

const API_KEY = '2ee2c5b569240ea2a2a879dd9c8a822c';

var cool=document.querySelector('.rech');



for (var i = 0; i < movies.length ; i++) {

    researchfilmspecific();

    function researchfilmspecific() {

    	var recherche= movies[i];
    	var clef='http://api.themoviedb.org/3/movie/'+recherche+'?api_key='+API_KEY+'';
    	console.log(clef);
    	$.getJSON(clef, loadmovieinformationspecific);
    }


    function loadmovieinformationspecific(response){

    	console.log(response);
    	var list = $('<p>');
    	var imglink = 'http://api.themoviedb.org/3/movie/'+response.id+'/images?api_key='+API_KEY+'&language=en-US';
    	console.log(imglink);
     	list.append('<div class="container"><img class="one-movie" src=http://image.tmdb.org/t/p/w185_and_h278_bestv2/'+response.poster_path+'><article class="movie-description"><h2 class="movie-title">'+response.original_title
     		+' ('+response.release_date.substr(0,4)+')</h2><p>Synopsis</p><p>'+response.overview+'</p><p></article><p class=favourite><form class="favorite-form" action="delete_favourite.php?id='+response.id+'" method="POST"><button class="bzz" type="submit">Delete</button></form></p></div>');	
     	
     	 $('.favourite-informations').append(list);
    }

}

