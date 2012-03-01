$(function () {
  $('div.tag').click(function () {
    $(this).toggleClass('enable');
  });

  $('input').focus(function () { 
    var element = $(this);
   
    element.addClass('activate');

    if(element.val() == 'Type your text...') {
      element.val('');
    }  
  });

  $('input').blur(function () {
    var element = $(this);

    element.removeClass('activate');
    
    if(element.val() == '') {
      element.val('Type your text...');
    } else {
      var div = $('<div>').addClass('tag droppable')
      .text(element.val()).click(function () {
         $(this).toggleClass('enable');
      }).draggable();

      $('#tags').append(div);
      element.val('Type your text...');
    }
  });

  $('input').keypress(function(event) {
    var element = $(this);
    if (event.which == 13) {
      element.blur();
      element.focus();
    }
  });

  $('.droppable').draggable();
  $('.draggable').droppable({
    drop: function (event, ui) {
      ui.draggable.fadeOut();
      $(this).removeClass('activate'); 
    },
    activate: function () {
      $(this).addClass('activate');
    },
    deactivate: function () {
      $(this).removeClass('activate');
    }
  });

});
