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
  $("button.toggle").on("click", (e) => {});
  $("h3.error").css({
    cursor: "pointer",
    textAlign: "center",
  });
  $("h3.error").on("click", () => {
    $("h3.error").toggleClass("warning");
  });
  $(".box").on("click", (e) => {
    $(".box").slideUp();
  });
});
