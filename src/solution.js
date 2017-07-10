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

class CommentList {
  constructor() {
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  filterComment(listComment) {
    if(this.comments.length === 0){
     $('#comments-list').append(`<li>No Comments</li>`);
    }
    this.comments = this.comments.filter(comment => {
      return comment.text === listComment;
    });


  }

  render() {
    $('#comments-list').empty();
    this.comments.map(comment => {
      $('#comments-list').append(comment.renderList());
    });
  }
}

class Comment {
  constructor(text) {
    this.text = text
  }

  renderList() {
    return `<li class="comment">${this.text}</li>`;
  }
}
