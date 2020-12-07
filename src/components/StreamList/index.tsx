import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreanRow,
  StreamHeader,
  StreamDescription,
  StreamCategory,
  StreamAvatar,
  StreamUsername,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem: React.FC = () => {
    return (
      <StreamContainer>
        <StreamThumbnail source={streamThumbnail} />

        <StreamColumn>
          <StreanRow>
            <StreamHeader>
              <StreamAvatar />
              <StreamUsername numberOfLines={1}>ocarlitos</StreamUsername>
            </StreamHeader>

            <StreamDescription numberOfLines={1}>
              Font-end com Next.js
            </StreamDescription>

            <StreamCategory numberOfLines={1}>
              Science and Technology
            </StreamCategory>
          </StreanRow>

          <TagRow>
            <TagView>
              <TagText>Portuguese</TagText>
            </TagView>
            <TagView>
              <TagText>Web Development</TagText>
            </TagView>
          </TagRow>
        </StreamColumn>
      </StreamContainer>
    );
  };

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
