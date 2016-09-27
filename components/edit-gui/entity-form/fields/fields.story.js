import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import StringField from "./string-field";

const onChange = (path, value) =>
  action("changing entity")(JSON.stringify(path), value);

storiesOf('Edit fields', module)
  .add('StringField', () => (<div>
      <StringField entity={{data: {fieldName: "value"}}} name="fieldName" onChange={onChange} />
      <StringField entity={{data: {}}} name="fieldName2" onChange={onChange} />
    </div>));
