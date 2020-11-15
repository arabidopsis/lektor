import jQuery from "jquery";

jQuery(function ($) {
  $("[data-toggle=offcanvas]").on("click", function () {
    const target = $($(this).attr("data-target") || ".block-offcanvas");
    const isActive = target.is(".active");
    target.toggleClass("active", !isActive);
    $(this).toggleClass("active", !isActive);
  });
});
