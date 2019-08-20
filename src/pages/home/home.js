import html from "./home.html";
import tpl from "nunjucks";

class Page {
  init() {
    console.log("home page");
    document.querySelector("main").innerHTML = tpl.renderString(html, {});
  }
}

export default new Page();
