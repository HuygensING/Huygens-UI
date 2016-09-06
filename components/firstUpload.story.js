import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FirstUpload from './firstUpload.jsx';

storiesOf('first upload jumbotron', module)
  .add('without example', () => (
    <FirstUpload onUpload={action("onUpload")}/>
  ))
  .add('with example', () => (
    <FirstUpload onUpload={action("onUpload")} exampleSheetUrl="/foo/bar.xls"/>
  ));