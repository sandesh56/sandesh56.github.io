$(() => {
  const success = (ans) => {
    $("#answer").val("");
    $("p").text(ans);
  };

  $("#answer").trigger("reset");
  const noSuccess = () => {
    $("#answer").after("<p> Server error</p>");
  };
  $("#ans").submit(() => {
    $.get("/8ball")
      .done((res) => success(res))
      .fail(noSuccess);

    return false;
  });
});
