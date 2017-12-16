import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleAppComponent } from './simple-app/simple-app.component';
import { simpleReducer } from './simple-app/simple.reducer';
import { StoreModule, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';
import { PostsModule } from './posts/posts.module';
import { postReducer } from './posts/post/post.reducer';
import { BlogModule } from './blog/blog.module';
import { blogReducer } from './blog/reducer/blog.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SimpleAppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      hello: simpleReducer,
      post: postReducer,
      blog: blogReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    RouterModule.forRoot(routes),
    PostsModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
