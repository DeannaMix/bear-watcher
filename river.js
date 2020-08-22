const userBear = (array) => {
  $("#bear-card-container").html("");
  array.forEach((bear) => {
    $("#bear-card-container").append(`
    <div class="card" style="width: 18rem;">
  <img src="${bear.bearImg}" class="card-img-top" alt="...">
  <div class="card-body">
    <h2> "${bear.bearName}"</h2>
  </div>
</div>`)
  });
}


export { userBear };