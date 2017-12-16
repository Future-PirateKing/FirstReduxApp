import { Action } from '@ngrx/store';

export function simpleReducer (state: string = 'hello sam here', action: Action) {
  console.log(state, action.type);
  switch (action.type) {
    case 'MALVIKA':
      return state = 'hello Malvika here';

    case 'KEYUR':
      return state = 'hello backchod here';

    case 'RHEA':
      return state = 'hello Rhea here';

    case 'ASHWITA':
      return state = 'hello Ashwita here';

    default:
      return state;
  }
}
