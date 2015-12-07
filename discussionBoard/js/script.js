$("#submit").on("click", function(e){
  e.preventDefault();
  var newPost = $("#post-2").clone();

  var date = {
    time: new Date().getHours() + ":" +
         ((new Date().getMinutes() > 10) ? new Date().getMinutes()
                                       : "0" + new Date().getMinutes()),
    date: new Date().getMonth() + "/" +
          new Date().getDay() + "/" +
          new Date().getFullYear()
  }

  newPost.find(".panel-body").html(
    $("#input-content").val() +
    '<div class="post-footer">Posted at ' + date.time + ' on ' + date.date + '.</div>'
  );

  newPost.find("img").attr("src", "images/avatar1.png");
  newPost.find("figcaption").text("Elliot Smith (You)");


  newPost.appendTo("#post-list");
  $("#input-content").val("");



});


$("#newThreadForm").submit(function(e){
    e.preventDefault();
    var newThreadList = $("#sidebar .js-nav-links li:first").clone();
    newThreadList.find("a").text($("#newThreadTitle").val());
    $("#sidebar .js-nav-links").prepend(newThreadList);

    toastr.success('Thread created successfully.')
  });

function alertMsg() {
    alert("Functionality not implemented!");
}
