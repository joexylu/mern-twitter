import { combineReducers } from 'redux';
import session from './session_api_reducer';
import errors from './erros_reducer';
import tweets from './tweets_reducer'

const RootReducer = combineReducers({
  session: session,
  errors: errors,
  tweets: tweets
});

export default RootReducer;