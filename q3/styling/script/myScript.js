$(function () {
  $("button").click(() => {
    console.log("Hi i am submiting");
    $.post("/addToCart", {
      id: $("#productId").val(),
      // contentType: "application/json; charset=utf-8",
    })
      .done((data) => {
        console.log();
        let element = $("<h4>", {
          text: data.productName,
          // text: data.description,
          // text: data.price,
        });
        console.log(data);
        $(".container").prepend(element);
        // $(".cart card-title").console.log("done");
      })
      .fail((error) => {
        console.log(error);
      });
  });
});
