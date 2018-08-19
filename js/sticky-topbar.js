!function () {
    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
            x.preventDefault()                //阻止原本作用
            // let a = x.currentTarget
            // let href = a.getAttribute('href')  //'#siteAboutb'
            // let element = document.querySelector(href)
            // let top = element.offsetTop        //元素顶边(页面顶部)
            let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop

            let currentTop = window.scrollY
            let targetTop = top - 80
            let s = (targetTop - currentTop)
            let t = Math.abs((s / 100) * 400)
            if (t > 500) { t = 500 }
            var coords = { y: currentTop }; // Start at (0, 0)
            var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({ y: targetTop }, t) // Move to (300, 200) in 1 second.
                .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    window.scrollTo(0, coords.y)
                })
                .start();
        }
    }
}

