var x = window.location.href;
console.log(x);

console.log('bla');
var API_KEY = '2ee2c5b569240ea2a2a879dd9c8a822c';

var cool=document.querySelector('.rech');


$('.entrer').on('click', researchfilm);

$(document).on('click', '.results-section li p', getmovieinformation);

$('#pet-select').on('change',changegenre);

function changegenre(){
	var genre=$('#pet-select').val();
	var clef='http://api.themoviedb.org/3/discover/movie?api_key='+API_KEY+'&with_genres='+genre;
	console.log(clef);
	$.getJSON(clef,displaytrendingmovies);
}

function getgenre(response){
console.log(response);
}

researchfilmstrendingintheatres();


function researchfilm(event) {
	event.preventDefault();
	var recherche= cool.value;
	var clef='http://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&language=en-US&query='+recherche+'&page=1&include_adult=false';
	$.getJSON(clef, recupFilm);
}


function recupFilm(response) {
	var list = $('<ul>');
 	for (var i = 0 ; i < response.results.length; i++) {
	 		var li = $('<li>');

	 		list.append(li.append('<p data-id="'+response.results[i].id+'">'+response.results[i].original_title+'</p>'));	
 	}
 	$('.trending-section').html(list);
}



function getmovieinformation(event){
	event.preventDefault();
  	var index = $(this).data('id');
  	$('.movie-information').removeClass('hide');
	var clef2 ='http://api.themoviedb.org/3/movie/'+index+'?api_key='+API_KEY+'';
	$.getJSON(clef2, loadmovieinformation);
  	}


function loadmovieinformation(response){
	var list = $('<div class="details">');
	var imglink = 'http://api.themoviedb.org/3/movie/'+response.id+'/images?api_key='+API_KEY+'&language=en-US';

	console.log(imglink);
 	list.append('<a href="app_dev/movie.php?id='+response.id+'"><img src=http://image.tmdb.org/t/p/w185_and_h278_bestv2/'+response.poster_path+'></a><p>'+response.original_title
 		+'</p>');	
 	
 	 $('.movie-information').html(list);
}



function researchfilmstrendingintheatres () {
	var clef="http://api.themoviedb.org/3/trending/movie/week?api_key="+API_KEY;
	$.getJSON(clef,displaytrendingmovies);

}

function displaytrendingmovies (response){
	console.log(response);


	var list = $('<div class="trending-section">');
	var yo=$('<h2 class="trending-title">Trending</h2>');
 	for (var i = 0 ; i < 15
 		; i++) {

 		if (i===0) {
 			list.append(yo);
 		}

		var imglink = '<a href="movies/'+response.results[i].id+'"><img class="trending-posters" src=http://image.tmdb.org/t/p/w600_and_h900_bestv2/'+response.results[i].poster_path+' data-id="'+response.results[i].id+' "></a>';
	 		var li = $('<article class="trendingmovie">');
	 		list.append(li.append(imglink+'<p data-trendingid="'+response.results[i].id+'" class="movietrending">'+response.results[i].original_title+'</p>'));	
 	}
 	$('.results-section').html(list);

 	console.log('yoyoyoyoyoyoy');


}

console.log('jyjtyjytjyt');
