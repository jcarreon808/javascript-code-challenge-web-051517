class Comment {
  constructor(text) {
    this.text = text
  }

  renderList() {
    return `<li class="comment">${this.text}</li>`;
  }
}
