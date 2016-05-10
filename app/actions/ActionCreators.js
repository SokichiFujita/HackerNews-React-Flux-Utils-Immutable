import axios from 'axios';
import AppDispatcher from '../dispatchers/AppDispatcher';

const ActionCreators = {
  getStories(endpoint) {
    if (endpoint !== 'fav') {
      axios
        .get(`https://hnsb.herokuapp.com/api/v1/${endpoint}`)
        .then(response => {
          const stories = response.data.stories.map(x => [x.story_id, x]);
          AppDispatcher.dispatch({
            type: `hn/get/${endpoint}`,
            data: new Map(stories),
          });
        }).catch(err => {
          console.log('err', err);
        });
    } else {
      AppDispatcher.dispatch({
        type: 'hn/get/fav',
      });
    }
  },

  postFav(story) {
    AppDispatcher.dispatch({
      type: 'hn-local/post/fav',
      data: story,
    });
  },
};

export default ActionCreators;
