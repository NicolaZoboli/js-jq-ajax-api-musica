// GOAL:
// Attraverso una chiamata ajax all'Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella select vedremo i
// corrispondenti cd.

function getMusicListener() {
  $.ajax({
    url: 'https://flynn.boolean.careers/exercises/api/array/music',
    method: 'GET',
    success: function (data, state) {
      var success = data['success'];
      var arrayMusic = data['response'];

      if (success) {
        var template = $('#cd-template').html();
        var compiled = Handlebars.compile(template);
        var target = $('.cds-container');

        for (var i = 0; i < arrayMusic.length; i++) {
          var cd = arrayMusic[i];
          var cdHTML = compiled(cd);
          target.append(cdHTML);
        }

        selectGenre();

      }
    },
    error: function (request, state, error) {
    console.log('request', request);
    console.log('state', state);
    console.log('error', error);
  }
  });
}

function selectGenre() {
  var option = $('#genres option');
  console.log(option);
}


$(document).ready(function() {
	getMusicListener();
});
