import html from "./header.html";
import tpl from "nunjucks";

class Page {
  constructor() {
    document.querySelector("header").innerHTML = tpl.renderString(html, {});
  }
}

export default new Page();
