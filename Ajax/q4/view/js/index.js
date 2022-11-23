$(() => {
  $("#add").click(() => addItems());
  var addItems = () => {
    let id = $("#hidden").val();
    fetch("/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    }).then(() => (window.location.href = "/cartItems"));
  };
});
