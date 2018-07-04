(function() {

  function adjust(id, direction) {

    const vowels = ['i', 'o', 'e', 'a'];
    const transf = ['1, 1', '-1, 1', '-1, -1', '1, -1'];

    if (($(`#${id}`).data('adjustments')) === undefined) ($(`#${id}`).data('adjustments', 0));
    const adj = ($('#' + id).data('adjustments')) + direction;
    ($(`#${id}`).data('adjustments', adj));

    const pos = adj < 0 ? adj + Math.ceil(Math.abs(adj)/4)*4 : adj > 3 ? adj - Math.floor(adj/4)*4 : adj;

    $($(`#${id}`).find('.symbol')).css({'transform': (['_', 'p', 't', 'r', 'f', 'th'].includes(id) ? `rotate(${adj*90}deg)` : `scale(${transf[pos]})`) });
    $($(`#${id}`).find('.transcription')).text((id === '_' ? '' : id) + vowels[pos])

  }

  $(function() {
      $('.symbol').on('click', function() {
        adjust($(this).parent()[0].id, -1);
      });
      $('.symbol').on('contextmenu', function() {
        adjust($(this).parent()[0].id, 1);
        return false;
      });
  });

  document.querySelector('video').playbackRate = 0.2;

})();
