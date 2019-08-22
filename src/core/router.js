import Router from "vanilla-router";
import homejs from "~/pages/home/home.js";
import aboutjs from "~/pages/about/about.js";

var router = new Router({
  mode: "history",
  page404: function(path) {
    console.log('"/' + path + '" Page not found');
  }
});

router.add("", function() {
  homejs.init();
});

router.add("home", function() {
  homejs.init();
});

router.add("about", function() {
  aboutjs.init();
});

router.addUriListener();

router.navigateTo("");

window.router = router;

export default router;
