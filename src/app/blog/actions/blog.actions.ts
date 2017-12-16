import { Action } from '@ngrx/store';

export const UPVOTE = '[BlogPost] Upvote';
export const DOWNVOTE = '[BlogPost] Downvote';
export const ADD = '[BlogPost] Add';

export class Add implements Action {
    readonly type = ADD;

    constructor (public payload: string) {}
}

export class Upvote implements Action {
    readonly type = UPVOTE;

    constructor (public payload: any) {}
}

export class Downvote implements Action {
    readonly type = DOWNVOTE;

    constructor (public payload: any) {}
}

export type ALL
    = Upvote
    | Add
    | Downvote;
