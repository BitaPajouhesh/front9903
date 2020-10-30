
var $Selector = {
    midle: $('#midle'),
    glowmidle: $('#glowmidle'),
    down: $('#down'),
    glowdown:$('#glowdown')
}

setInterval(function(){

    var curentSlide = $Selector.midle.find('li.active');
    if(curentSlide.next().length){
    curentSlide.next().addClass('active');
    }else{
    $Selector.midle.find('li:first-child').addClass('active')
    }
    curentSlide.removeClass('active');

}, 2000);

setInterval(function(){

    var curentSlide = $Selector.glowmidle.find('li.active');
    if(curentSlide.next().length){
    curentSlide.next().addClass('active');
    }else{
    $Selector.glowmidle.find('li:first-child').addClass('active')
    }
    curentSlide.removeClass('active');

}, 2000);

            // setInterval(function(){

            //     var curentSlide = $Selector.down.find('li.active');
            //     if(curentSlide.next().length){
            //     curentSlide.next().addClass('active');
            //     }else{
            //     $Selector.down.find('li:first-child').addClass('active')
            //     }
            //     curentSlide.removeClass('active');

            // }, 2000);

setInterval(function(){

    var curentSlide = $Selector.glowdown.find('li.active');
    if(curentSlide.next().length){
    curentSlide.next().addClass('active');
    }else{
    $Selector.glowdown.find('li:first-child').addClass('active')
    }
    curentSlide.removeClass('active');

}, 2000);
