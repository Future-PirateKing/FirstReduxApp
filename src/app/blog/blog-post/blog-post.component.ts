import { BlogPost } from './../models/blog.models';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BlogActions from './../actions/blog.actions';

interface AppState {
  blog: BlogPost[];
}

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  text: string;
  blog$: Observable<BlogPost[]>;

  constructor(public store: Store<AppState>) {
    this.blog$ = this.store.select('blog');
  }

  ngOnInit() {
  }

  post() {
    this.store.dispatch(new BlogActions.Add(this.text));
    this.text = '';
  }

  like(b) {
    this.store.dispatch(new BlogActions.Upvote(b));
  }

  dislike(b) {
    this.store.dispatch(new BlogActions.Downvote(b));
  }

}
