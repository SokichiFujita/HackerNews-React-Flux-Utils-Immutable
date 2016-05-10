import React from 'react';

import ListItem from 'material-ui/lib/lists/list-item';
import IconButton from 'material-ui/lib/icon-button';
import FavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';
import Share from 'material-ui/lib/svg-icons/social/share';

import ActionCreators from '../actions/ActionCreators';
import A from './A';

const fav = (story) => {
  ActionCreators.postFav(story);
};

const share = () => {
  //ToDo
};

const News = (props) => {
  const title = `${props.story.title}`;
  const subtitle1 = `${props.story.points} points by ${props.story.submitter} | `;
  const subtitle2 = `${props.story.num_comments} comments | `;
  const subtitle3 = `${props.story.domain}`;

  return (
    <ListItem
      primaryText={
        <div><A url={props.story.link} text={title} color="#000" /></div>
      }
      secondaryText={
        <div>
          <A url={props.story.submitter_profile} text={subtitle1} color="#666" />
          <A url={props.story.comments_link} text={subtitle2} color="#666" />
          <A url={props.story.link} text={subtitle3} color="#666" />
        </div>
      }
      rightIconButton={
        <span>
          <IconButton onClick={e => fav(props.story)}>
            <FavoriteBorder/>
          </IconButton>
          <IconButton onClick={e => share(props.story)}>
            <Share />
          </IconButton>
        </span>
      }
    />);
};

export default News;
