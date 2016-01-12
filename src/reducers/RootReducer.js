import {combineReducers} from 'redux';
import artistReducer from './ArtistsReducer';
import artistAlbumsReducer from './ArtistAlbumsReducer';
import inputsReducer from './InputsReducer';

const rootReducer = combineReducers({
  artists: artistReducer,
  albums: artistAlbumsReducer,
  inputs: inputsReducer
});

export default rootReducer;