import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  @Input() posts=[];
  del(i:number)
  {
    console.log(i);
    this.posts.splice(i,1);
  }
  constructor() { }

  ngOnInit() {
  }

}
