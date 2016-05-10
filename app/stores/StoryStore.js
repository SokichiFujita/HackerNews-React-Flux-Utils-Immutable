import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatchers/AppDispatcher';
import FavStore from './FavStore';
import Immutable from 'immutable';

class StoryStore extends ReduceStore {
  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case 'hn/get/top':
        return action.data;
      case 'hn/get/newest':
        return action.data;
      case 'hn/get/best':
        return action.data;
      case 'hn/get/fav':
        return FavStore.getState();
      default:
        return state;
    }
  }
}

export default new StoryStore(AppDispatcher);
