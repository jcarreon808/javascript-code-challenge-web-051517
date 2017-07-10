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
