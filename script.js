var scaleDimensions = ['-1, 1', '-1, -1', '1, -1', '1, 1'];

function adjustSymbol(modde, idName, idNameAd, arr) {
    var counter = ($( '#' + idName ).data('counter')) || 0;
    if (counter == 4) {counter = 0};
    if (modde == "rotate") {
        var angleR = ($( '#' + idName ).data('angle') + 90) || 90;
        $( '#' + idName ).css({'transform': 'rotate(' + angleR + 'deg)'});
        $( '#' + idName ).data('angle', angleR);
    } else if (modde == "scale") {
        $( '#' + idName ).css({'transform': 'scale(' + scaleDimensions[counter] + ')'});
    }
    $( '#' + idNameAd ).text(arr.split(',')[counter]);
    counter++;
    $( '#' + idName ).data('counter', counter);
}

$(function() {

    $("#ai").on('click', function() {
        adjustSymbol('rotate', 'ai', 'ai-t', 'a,i,u,ai');
    });
    $("#pai").on('click', function() {
        adjustSymbol('rotate', 'pai', 'pai-t', 'pa,pi,pu,pai');
    });
    $("#tai").on('click', function() {
        adjustSymbol('rotate', 'tai', 'tai-t', 'ta,ti,tu,tai');
    });
            
    $("#ki").on('click', function() {
        adjustSymbol('scale', 'ki', 'ki-t', 'ki,ka,ku,kai');
    });
    $("#gi").on('click', function() {
        adjustSymbol('scale', 'gi', 'gi-t', 'gi,ga,gu,gai');
    });
    $("#mi").on('click', function() {
        adjustSymbol('scale', 'mi', 'mi-t', 'mi,ma,mu,mai');
    });
            
    $("#ni").on('click', function() {
        adjustSymbol('scale', 'ni', 'ni-t', 'ni,na,nu,nai');
    });
    $("#si").on('click', function() {
        adjustSymbol('scale', 'si', 'si-t', 'si,sa,su,sai');
    });
    $("#li").on('click', function() {
        adjustSymbol('scale', 'li', 'li-t', 'li,la,lu,lai');
    });
            
    $("#ji").on('click', function() {
        adjustSymbol('scale', 'ji', 'ji-t', 'ji,ja,ju,jai');
    });
    $("#vi").on('click', function() {
        adjustSymbol('scale', 'vi', 'vi-t', 'vi,va,vu,vai');
    });
    $("#ri").on('click', function() {
        adjustSymbol('scale', 'ri', 'ri-t', 'ri,ra,ru,rai');
    });
            
});