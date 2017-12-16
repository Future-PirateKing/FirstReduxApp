import { Action } from '@ngrx/store';

export const UPVOTE = '[BlogPost] Upvote';
export const DOWNVOTE = '[BlogPost] Downvote';
export const ADD = '[BlogPost] Add';
export const SELECTED = '[BlogPost] Selected';
export const UPDATE = '[BlogPost] Update';
export const DELETE = '[BlogPost] Delete';

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

export class Selected implements Action {
    readonly type = SELECTED;

    constructor(public payload: number) {}
}

export class Update implements Action {
    readonly type = UPDATE;

    constructor (public payload: any) {}
}

export class Delete implements Action {
    readonly type = DELETE;

    constructor (public payload: any) {}
}

export type ALL
    = Upvote
    | Add
    | Downvote
    | Selected
    | Update
    | Delete;
