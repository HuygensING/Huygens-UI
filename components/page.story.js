import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Page from './page.jsx';

storiesOf('Page', module)
  .add('without a user', () => (
    <Page />
  ))
  .add('with a user', () => (
    <Page username="Bas Doppen" userlocation="http://www.example.org" />
  ))
  .add('with content', () => (
    <Page>
      <img src="http://placekitten.com/g/1280/1024"/>
    </Page>
  ));