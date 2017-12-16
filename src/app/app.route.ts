import { BlogPostComponent } from './blog/blog-post/blog-post.component';

import { Routes } from '@angular/router';
import { SimpleAppComponent } from './simple-app/simple-app.component';
import { PostComponent } from './posts/post/post.component';

export const routes: Routes = [
    {
        path: '',
        component: SimpleAppComponent
    },
    {
        path: 'simple',
        component: SimpleAppComponent
    },
    {
        path: 'post',
        component: PostComponent
    },
    {
        path: 'blog',
        component: BlogPostComponent
    }
];
