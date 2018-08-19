!function () {
    let aTags = document.querySelectorAll('nav.menu > ul >li>a')
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
}.call()
