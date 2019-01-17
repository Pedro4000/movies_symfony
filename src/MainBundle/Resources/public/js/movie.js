var APImeter;
var x = window.location.href;
console.log(x);


const API_KEY = '2ee2c5b569240ea2a2a879dd9c8a822c';

var cool=document.querySelector('.rech');




var getUrlParameter = function getUrlParameter() {
    var sPageURL = window.location.pathname,
        sURLVariables = sPageURL.split('/');

        return sURLVariables[7];
};

console.log(getUrlParameter());

researchfilmspecific();

function researchfilmspecific() {

    var recherche= getUrlParameter('id');
    var clef='http://api.themoviedb.org/3/movie/'+recherche+'?api_key='+API_KEY+'';
    console.log(clef);
    $.getJSON(clef, loadmovieinformationspecific);
}


function loadmovieinformationspecific(response){

$(document).ready(function() {
    var ctx = init();

    var percentage = (response.vote_average*10);

    var anim = new PercentAnimation(ctx, percentage);
    anim.startAnimation();

    $('#test-form').submit(function(e) {
        e.preventDefault();
        var percent = Math.floor(Math.random() * 101);
        anim.setPercent(percent);
        anim.startAnimation();
    });
});

    console.log(response);
        
    var list = $('<p>');
    var imglink = 'http://api.themoviedb.org/3/movie/'+response.id+'/images?api_key='+API_KEY+'&language=en-US';
    console.log(imglink);
    list.append('<div class="container"><img class="one-movie" src=https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+response.poster_path+'><article class="movie-description"><h2 class="movie-title">'+response.original_title
        +' ('+response.release_date.substr(0,4)+')</h2><p>Synopsis</p><p>'+response.overview+'</p><p></article><p class=favourite><form class="favorite-form" action="add_favourite.php?id='+response.id+'" method="POST"><i class="fas fa-star favourite"></i><button class="bzz" type="submit">Add to fv</button></form></p></div>'); 
    
     $('.movie-informations').html(list);
}





$(function() {
  $('.bzz').hover(function() {
    $('.favourite').css('color', 'yellow');
    $('.favourite').css('cursor', 'pointer');
    $('.favourite').css('transition', '400ms');

  }, function() {
    // on mouseout, reset the background colour
    $('.favourite').css('color', '');
    $('.favourite').css('cursor', '');
    $('.favourite').css('transition', '400ms');
  });
});