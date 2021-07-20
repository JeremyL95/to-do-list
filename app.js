$(() => {
  $("input").on("keyup", (key) => {
    let value = $("input").val();
    let count = $("#count").text();
    let added = false;

    if (key.keyCode === 13 && value !== "") {
      let task = $('<li class="my-list"></li>').text(value);
      $(task).prepend('<input type="checkbox" class="check-box">');
      $(task).append('<i class="far fa-trash-alt bin"></i>');
      $("#list").append(task);
      $("#input").val("");

      //removing task
      $(".bin").on("click", function () {
        $(this).parent().fadeOut(250);

        //decrease completed count
        if (added) {
          $("#count").text(--count);
        }
      });

      //push to completed section
      $(".check-box").on("click", function () {
        let done = $(this).parent();

        //increase completed count
        $("#count").text(++count);

        done.fadeOut(function () {
          $(".completed").append(done);
          done.fadeIn();
          done.css({ background: "transparent", color: "#c0c0c0" });
          added = true;
        });

        $(this).remove();
      });
    }
  });
});
