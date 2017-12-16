
import * as PostActions from './post.actions';
import { Post } from './post.models';

export type Action = PostActions.ALL;

const defaultState: Post = {
    text: 'Hello, I am Wassup',
    likes: 0
};

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};

export function postReducer (state: Post = defaultState, action: Action) {
    switch (action.type) {
        case PostActions.EDIT:
            return newState(state, {text: action.payload});

        case PostActions.UPVOTE:
            return newState(state, {likes: state.likes + 1});

        case PostActions.DOWNVOTE:
            return newState(state, {likes: state.likes - 1});

        case PostActions.RESET:
            return defaultState;

        default:
            return state;
    }
}
