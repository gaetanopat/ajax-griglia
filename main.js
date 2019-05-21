$(document).ready(function(){
  var table_td = $('#template_quadratini').html();
  var template_table_td_function = Handlebars.compile(table_td);
  console.log(table_td);
  
  // aggiungo alla tabella le 6 colonne per 6 righe
  for(var i = 0; i < 6; i++){
    $('table').append(table_td);
  }

  // quando clicco su un quadratino
  $('tr td').click(function(){
    // prendo il quadratino cliccato
    var quadrato_cliccato = $(this);
    console.log(quadrato_cliccato);
    $.ajax({
      url: 'https://www.boolean.careers/api/random/int',
      method: 'get',
      success: function (data, stato) {
        // prendo il numero e lo appoggio in una variabile
        var valore_quadratino = data.response;
        console.log(valore_quadratino);
        coloraQuadratino(quadrato_cliccato, valore_quadratino);
      },
      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
      }
    });
  });
});

function coloraQuadratino(td_scelto, numero){
  // se il numero è <= 5 allora tolgo la classe green per sicurezza e aggiungo la classe yellow (così se riclicco mi aggiusta tutto automaticamente)
  if(numero <= 5){
    td_scelto.removeClass('green');
    td_scelto.addClass('yellow');
    td_scelto.text(numero);
  }
  // se il numero è > 5 5 allora tolgo la classe yellow per sicurezza e aggiungo la classe green (così se riclicco mi aggiusta tutto automaticamente)
  if(numero > 5){
    td_scelto.removeClass('yellow');
    td_scelto.addClass('green');
    td_scelto.text(numero);
  }
}
