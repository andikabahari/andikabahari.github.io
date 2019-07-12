(function(window) {
  "use strict";

  var document = window.document;
  var sections = ["profile", "education", "skills", "stories"];

  sections.forEach(function(section) {
    window[section] = document.getElementById(section);
  });

  document
    .querySelector(".sections .btns")
    .addEventListener("click", function(e) {
      e.preventDefault();

      var section = e.target.href.replace(/(.+)?#/, "");

      if (sections.includes(section)) {
        sections.forEach(function(section) {
          window[section].classList.remove("active");
        });

        window[section].classList.add("active");
      }
    });
})(window);
