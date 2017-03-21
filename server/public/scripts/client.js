console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  $( '#addJokeButton' ).on( 'click', function(){


    console.log( 'addJokeButton on click');


    var joke = {
        whoseJoke: $("#whoseJokeIn").val(),
        jokeQuestion: $("#questionIn").val(),
        punchLine: $("#punchlineIn").val()
  };

    console.log('joke = ' + joke);

     $.ajax({
       type: 'POST',
       url:'/newjoke',
       data: joke,
      success: function(response) {
       console.log("SUCCESS!!!");
       console.log(response);
       getJokes();
     }

  });


  }); // end addJokeButton on click
}); // end doc ready

function getJokes() {
  $.ajax({
    type: 'GET',
    url: '/jokelist',
    // response is the products array
    success: function(response){
    console.log(response);
    displayJokes(response);
  }
});
}

function displayJokes(jokes) {
  for (var i = 0; i< jokes.length; i++) {

    $("#outputDiv").append('<div><b>Whose Joke</b>:' + jokes[i].whoseJoke
    + '<br>Question:' + jokes[i].jokeQuestion + '<br>Punchline:' + jokes[i].punchLine + '</div><p></p>');
  }

}
