$(() => {
  console.log("Ready");
  $("h1")
    .on("click", (e) => {
      console.log(e);
    })
    .css("font-size");
  console.log("html()", $("h2").html());
  console.log("text()", $("h2").text());
  console.log("css(property)", $("h2").css("color", "red"));
  $("h1").css({ color: "green" });
  $(".box").attr("style", "display: flex");
  $(".box").css({
    height: "300px",
    width: "300px",
    background: "red",
    margin: "20px",
    "margin-top": "50px",
  });
});
