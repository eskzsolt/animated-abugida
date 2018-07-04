(function() {

  function adjustment(id) {

    let mode = ['_', 'p', 't', 'r', 'f', 'th'].includes(id) ? 'symmetrical' : 'asymmetrical';

    const vowels = {
      'symmetrical': ['o', 'e', 'a', 'i'],
      'asymmetrical': ['e', 'o', 'a', 'i']
    };

    const scale_dimensions = ['-1, 1', '-1, -1', '1, -1', '1, 1'];

    const rotations = [90, 180, 270, 360];

    let counter = ($('#' + id).data('counter')) || 0;
    if (counter === 4) counter = 0;

    if (mode === 'symmetrical') {
      // symmetrical
      let ank = ($('#' + id).data('angle') + 90) || 90;
      $($('#' + id).find('.symbol')).css({'transform': 'rotate(' + ank + 'deg)'});
      $('#' + id).data('angle', ank);
    } else {
      // asymmetrical - DIFFERENT ORDER
      $($('#' + id).find('.symbol')).css({'transform': 'scale(' + scale_dimensions[counter] + ')'});
    }
    $($('#' + id).find('.transcription')).text((id === '_' ? '' : id) + vowels[mode][counter]);

    counter++;
    $('#' + id).data('counter', counter);

  }

  $(function() {
      $('.symbol').on('click', function() {
        adjustment($(this).parent()[0].id);
      });
  });

  document.querySelector('video').playbackRate = 0.2;

})();
