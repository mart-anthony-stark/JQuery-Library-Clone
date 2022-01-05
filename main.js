$(() => {
  console.log("Ready");
  $("h1").on("click", (e) => {
    console.log(e);
  });
  console.log("html()", $("h2").html());
  console.log("text()", $("h2").text());
});
