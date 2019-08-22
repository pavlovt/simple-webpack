import html from "./home.html";
import tpl from "nunjucks";

class Page {
  init() {
    console.log("home page");
    this.items = [{ title: "foo", id: 1 }, { title: "bar", id: 2 }];
    document.querySelector("main").innerHTML = tpl.renderString(html, this);
  }

  click() {
    alert("The link has been clicked");
  }
}

window.home = new Page();

export default window.home;
