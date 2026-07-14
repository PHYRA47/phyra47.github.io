// Builds the "On this page" table of contents from the article's headings.
// The <aside id="toc"> shell is emitted by _includes/_toc.html; CSS makes it
// a sticky sidebar on wide screens (see assets/css/dark-mode.css).
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var toc = document.getElementById("toc");
    if (!toc) return;

    var article = document.querySelector(".article-wrap");
    var list = toc.querySelector(".page-toc-list");
    if (!article || !list) return;

    var headings = Array.prototype.filter.call(
      article.querySelectorAll("h1, h2"),
      function (h) { return !toc.contains(h) && h.textContent.trim(); }
    );

    // Indent relative to the shallowest heading level on the page, so pages
    // written entirely in h2 (like posts) still render a flat list.
    var minLevel = headings.reduce(function (min, h) {
      return Math.min(min, parseInt(h.tagName.charAt(1), 10));
    }, 6);

    headings.forEach(function (heading) {
      var text = heading.textContent.trim();

      if (!heading.id) {
        heading.id = text.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-+|-+$/g, "");
      }

      var li = document.createElement("li");
      var depth = parseInt(heading.tagName.charAt(1), 10) - minLevel;
      if (depth > 0) {
        li.className = "toc-sub";
      }
      var a = document.createElement("a");
      a.href = "#" + heading.id;
      a.textContent = text;
      li.appendChild(a);
      list.appendChild(li);
    });

    if (headings.length === 0) {
      toc.style.display = "none";
    }
  });
})();
