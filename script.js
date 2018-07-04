(function() {

  function adjustment(id) {

<<<<<<< HEAD
    let mode = ['∅', 'p', 't', 'r', 'f', 'th'].includes(id) ? 'symmetrical' : 'asymmetrical';

    const vowels = {
      'symmetrical': ['o', 'e', 'a', 'i'],
      'asymmetrical': ['e', 'o', 'a', 'i']
=======
    const abugida = {
      'e': ['a', 'i', 'o', 'e'],
      'pe': ['pa', 'pi', 'po', 'pe'],
      'te': ['ta', 'ti', 'to', 'te'],
      'ke': ['ki', 'ka', 'ko', 'ke'],

      'ge': ['gi', 'ga', 'go', 'ge'],
      'me': ['mi', 'ma', 'mo', 'me'],
      'ne': ['ni', 'na', 'no', 'ne'],
      'se': ['si', 'sa', 'so', 'se'],

      'le': ['li', 'la', 'lo', 'le'],
      'je': ['ji', 'ja', 'jo', 'je'],
      've': ['vi', 'va', 'vo', 've'],
      're': ['ri', 'ra', 'ro', 're']
>>>>>>> refs/remotes/origin/master
    };

    const scale_dimensions = ['-1, 1', '-1, -1', '1, -1', '1, 1'];

    const rotations = [90, 180, 270, 360];

    let counter = ($('#' + id).data('counter')) || 0;
    if (counter === 4) counter = 0;

<<<<<<< HEAD
    if (mode === 'symmetrical') {
      // symmetrical
=======
    if (['e', 'pe', 'te'].includes(id)) {
>>>>>>> refs/remotes/origin/master
      let ank = ($('#' + id).data('angle') + 90) || 90;
      $($('#' + id).find('.symbol')).css({'transform': 'rotate(' + ank + 'deg)'});
      $('#' + id).data('angle', ank);
    } else {
      // asymmetrical - DIFFERENT ORDER
      $($('#' + id).find('.symbol')).css({'transform': 'scale(' + scale_dimensions[counter] + ')'});
    }
    $($('#' + id).find('.transcription')).text((id === '∅' ? '' : id) + vowels[mode][counter]);

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
