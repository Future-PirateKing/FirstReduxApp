import { Observable } from 'rxjs/Observable';
import { Post } from './post.models';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as PostActions from './post.actions';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post$: Observable<Post>;
  text: string;

  constructor(private store: Store<AppState>) {
    this.post$ = this.store.select('post');
  }

  ngOnInit() {
  }

  edit() {
    if (this.text !== '') {
      this.store.dispatch(new PostActions.Edit(this.text));
      this.text = '';
    }
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  reset() {
    this.store.dispatch(new PostActions.Reset());
  }

}
