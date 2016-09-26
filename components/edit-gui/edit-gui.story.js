import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import EditGui from "./edit-gui";

storiesOf('EditGui', module)
  .add('the gui...', () => (
    <EditGui  />
  ));