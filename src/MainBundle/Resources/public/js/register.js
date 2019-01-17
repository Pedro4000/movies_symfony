var j =false;

function verifyuser () {

	var a=$('.register-input-firstname').val();
	var b=$('.register-input-lastname').val();
	var c=$('.register-input-email').val();
	var d=$('.register-input-password').val();
	console.log(a,b,c,d);
}

$(document).ready(function() {
     $(':input[type="submit"]').prop('disabled', true);
     $('input[type="text"]').keyup(function() {
     	console.log($('.register-input-password').val().length);
        if($('.register-input-firstname').val() != '' && $('.register-input-lastname').val() != '' && $('.register-input-password').val() != '' && $('.register-input-email').val() != '') {

           $(':input[type="submit"]').prop('disabled', false);
        }
     });
 });



$('#blogLink').click (function (e) {
   e.preventDefault(); //will stop the link href to call the blog page

   setTimeout(function () {
       window.location.href = "blog.html"; //will redirect to your blog page (an ex: blog.html)
    }, 2000); //will call the function after 2 secs.

});