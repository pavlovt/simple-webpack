import html from "./about.html";
import tpl from "nunjucks";

class Page {
  init() {
    console.log("about page");
    document.querySelector("main").innerHTML = tpl.renderString(html, {});
  }
}

window.about = new Page();

export default window.about;
