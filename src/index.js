$(document).ready(function(){
  // your code here!
  const commentList = new CommentList();

 commentListener(commentList);
 commentFilter(commentList);
});

function commentListener(commentList) {
  $('#button').on("click", function () {
    event.preventDefault();
    let comment = $('#comment').val();
    let newComment = new Comment(comment);
    commentList.addComment(newComment);
    commentList.render();
    $('#comment').val('')

  })
}

function commentFilter(commentList){
    $('#filter').on('click', function(){
      event.preventDefault();
      let comment =$('#findComment').val();
      commentList.filterComment(comment);
      if(commentList.comments.length > 0){
        commentList.render();
      }
      $('#findComment').val('')
    })
}
