
import { Action } from '@ngrx/store';

export const EDIT = '[Post] Edit';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';
export const RESET = '[Post] Reset';

export class Edit implements Action {
    readonly type = EDIT;

    constructor(public payload: string) {}
}

export class Upvote implements Action {
    readonly type = UPVOTE;
}

export class Downvote implements Action {
    readonly type = DOWNVOTE;
}

export class Reset implements Action {
    readonly type = RESET;
}

export type ALL
    = Upvote
    | Downvote
    | Reset
    | Edit;
