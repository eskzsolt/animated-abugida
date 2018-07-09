(function() {

  function adjust(id, direction) {

    const vowels = ['i', 'o', 'e', 'a'];
    const transf = ['1, 1', '-1, 1', '-1, -1', '1, -1'];

    if (($(`#${id}`).data('counter')) === undefined) ($(`#${id}`).data('counter', 0));
    const cnt = ($('#' + id).data('counter')) + direction;
    ($(`#${id}`).data('counter', cnt));

    const pos = cnt < 0 ? cnt + Math.ceil(Math.abs(cnt)/4)*4 : cnt > 3 ? cnt - Math.floor(cnt/4)*4 : cnt;

    $($(`#${id}`).find('.symbol')).css({'transform': (['_', 'p', 't', 'r', 'f', 'th'].includes(id) ? `rotate(${cnt*90}deg)` : `scale(${transf[pos]})`) });
    $($(`#${id}`).find('.transcription')).text((id === '_' ? '' : id) + vowels[pos])

  }

  $(function() {
      $('.symbol').on({
        click: function() {
          adjust($(this).parent()[0].id, -1);
        },
        contextmenu: function() {
          adjust($(this).parent()[0].id, 1);
          return false;
        }
      });


      $('#info-button').on('click', function() {
        $('#_').toggle(function(){
          console.log('show');
          $(this).hide();
        },function(){
          console.log('hide');
          $(this).show();
        });
      });



  });

  document.querySelector('video').playbackRate = 0.2;

})();
