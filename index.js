function evalute(){
        if($('textarea').val().includes('^')){
            $('textarea').val($('textarea').val().replace('^', '**'));
        }
      $('textarea').val(eval($('textarea').val()));
    }

function back(){
      $('textarea').val($('textarea').val().substring(0, $('textarea').val().length - 1));
    }

$(document).ready(function(){
   $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#add, #subtract, #multiply, #divide, #power, #dot, #para1, #para2')
   .click(function(){
		var v = $(this).val();
    var total = $('textarea').val($('textarea').val() + v); 
    });
  
    //clicking equal sign evaluates the textarea
  $('#equal').click(evalute);

    //   Clear the textarea
  $('#clear').click(function(){
      $('textarea').val('');
    });
  
    // back button
  $('#backspace').click(back);
});

// calculator logic for keypress events
window.onkeydown = function(e) {
    let a = '0123456789+-*/^';
    if(a.includes(e.key)){
        total = $('textarea').val($('textarea').val() + e.key); 
    }
    else if(e.key === '=' || e.key === 'Enter'){
       evalute();
    }
    else if(e.key === 'Backspace'){
        back();
    }
    else if(e.key === 'c'){
         $('textarea').val('');
    }
}