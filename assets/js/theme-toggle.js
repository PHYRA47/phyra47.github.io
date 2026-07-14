// Dark/light theme toggle. The initial theme is applied by an inline script
// in _includes/_head.html before CSS loads, to avoid a flash of wrong theme.
(function () {
  var SUN = "☀︎"; // shown in dark mode (click for light)
  var MOON = "☽";      // shown in light mode (click for dark)

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function setTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    var icon = document.getElementById("theme-icon");
    if (icon) {
      icon.textContent = theme === "dark" ? SUN : MOON;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTheme(currentTheme());

    var toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var newTheme = currentTheme() === "dark" ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
      });
    }

    // Follow OS theme changes while the user has not made an explicit choice.
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
        if (!localStorage.getItem("theme")) {
          setTheme(e.matches ? "dark" : "light");
        }
      });
    }
  });
})();
