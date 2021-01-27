$("nav a").each(function () {
  var city = $(this);
  $("<option />", {
    value: city.attr("href"),
    text: city.text(),
  }).appendTo("nav select");
});

$("nav select").change(function() {
  window.location = $(this).find("option:selected").val();
});
