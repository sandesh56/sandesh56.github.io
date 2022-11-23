$(() => {
  $("#form").submit(() => {
    let id = $("#item").value();
    fetch("/content", {
      method: "POST",
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((res) => console.log({ res }));
  });
});
