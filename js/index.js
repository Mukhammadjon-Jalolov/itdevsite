import Translator from "./translator.js";

var translator = new Translator({
  persist: false,
  languages: ["en", "de"],
  defaultLanguage: "en",
  detectLanguage: true,
  filesLocation: "/i18n"
});

translator.load();


document.querySelector("select").addEventListener("change", function(evt) {
  console.log(evt.target.value)
  translator.load(evt.target.value);
  /*
  if (evt.target.tagName === "INPUT") {
    translator.load(evt.target.value);
  } */
});


