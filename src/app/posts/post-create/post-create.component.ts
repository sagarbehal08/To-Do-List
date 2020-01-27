import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  @Output() postCreated = new EventEmitter();

    enteredTitle = "";
    enteredContent = "";

    onAddPost(){
      const post = {title: this.enteredTitle, content: this.enteredContent};
      console.log(post);
      this.postCreated.emit(post);
  }
  
  ngOnInit() {
  }

}
