(function() {

  function adjustment(id) {

    const abugida = {
      'ai': ['a', 'i', 'u', 'ai'],
      'pai': ['pa', 'pi', 'pu', 'pai'],
      'tai': ['ta', 'ti', 'tu', 'tai'],
      'kai': ['ki', 'ka', 'ku', 'kai'],

      'gai': ['gi', 'ga', 'gu', 'gai'],
      'mai': ['mi', 'ma', 'mu', 'mai'],
      'nai': ['ni', 'na', 'nu', 'nai'],
      'sai': ['si', 'sa', 'su', 'sai'],

      'lai': ['li', 'la', 'lu', 'lai'],
      'jai': ['ji', 'ja', 'ju', 'jai'],
      'vai': ['vi', 'va', 'vu', 'vai'],
      'rai': ['ri', 'ra', 'ru', 'rai']
    };

    const scale_dimensions = ['-1, 1', '-1, -1', '1, -1', '1, 1'];

    let counter = ($('#' + id).data('counter')) || 0;
    if (counter == 4) counter = 0;

    if (['ai', 'pai', 'tai'].includes(id)) {
      let ank = ($('#' + id).data('angle') + 90) || 90;
      $($('#' + id).find('.symbol')).css({'transform': 'rotate(' + ank + 'deg)'});
      $('#' + id).data('angle', ank);
    } else {
      $($('#' + id).find('.symbol')).css({'transform': 'scale(' + scale_dimensions[counter] + ')'});
    }

    $($('#' + id).find('.transcription')).text(abugida[id][counter]);

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
