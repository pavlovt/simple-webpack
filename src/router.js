import {Router} from 'vanilla-router'
import homejs from './pages/home/home.js'
import hometpl from './pages/home/home.html'
import aboutjs from './pages/about/about.js'
import abouttpl from './pages/about/about.html'

var router = new Router({
    mode: 'history',
    page404: function (path) {
        console.log('"/' + path + '" Page not found');
    }
});

router.add('', function () {
    document.body.innerHTML = hometpl;
    homejs.init()
});

router.add('home', function () {
    document.body.innerHTML = hometpl;
    homejs.init()
});

router.add('hello/:any', function (name) {
    console.log('Hello, ' + name);
});

router.add('about', function () {
    document.body.innerHTML = abouttpl;
    aboutjs.init()
});

router.addUriListener();

// router.navigateTo('hello/World');
module.exports = router;