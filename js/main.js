var headerId = document.getElementById('headerId');
var sky = document.getElementById('sky');
var mountain = document.getElementById('mountain');
var trees = document.getElementById('trees');
var title = document.getElementById('title');
var layer = document.getElementById('layer');

window.onload = function hHeader(){
    var heightImages = trees.offsetHeight;
    headerId.style.height = heightImages + 'px';

    window.onscroll = function heightHeader(){
        let y = (window.scrollY);

        sky.style.bottom = -y/100 + '%';
        mountain.style.top = 50 - (y/200) + '%';
        trees.style.bottom = y/50 + '%';
        title.style.bottom = 62 - (y/150) + '%';

        if(100 - (y/20) >= 0){layer.style.top = 100 - (y/20) + '%';}

        if(100 - (y/20) < 0){layer.style.top = '0%';}
    } 
}

window.onresize = function(){
    heightImages = trees.offsetHeight;
    headerId.style.height = heightImages + 'px';
    mountain.style.top = '50%';
    trees.style.bottom = '0';   
    sky.style.bottom = '0';
    title.style.bottom = '62%';
    layer.style.bottom = '100%';
}


