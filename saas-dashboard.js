/**
 * Mini-dashboard demo + animaciones ligeras (solo index).
 * Sin dependencias; respeta prefers-reduced-motion.
 */
(function () {
  function initDashBars() {
    var rows = document.querySelectorAll(".saas-dashboard .dash-bar-row");
    if (!rows.length) return;
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );
    rows.forEach(function (r) {
      io.observe(r);
    });
  }

  function initBadgeEmphasis() {
    var root = document.querySelector(".saas-dashboard__badges");
    if (!root) return;
    var badges = root.querySelectorAll(".dash-badge");
    if (!badges.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      badges[0].classList.add("is-emphasis");
      return;
    }
    var i = 0;
    badges[0].classList.add("is-emphasis");
    setInterval(function () {
      badges.forEach(function (b) {
        b.classList.remove("is-emphasis");
      });
      i = (i + 1) % badges.length;
      badges[i].classList.add("is-emphasis");
    }, 2600);
  }

  function boot() {
    initDashBars();
    initBadgeEmphasis();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
