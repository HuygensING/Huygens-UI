import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import StringField from "./string-field";
import SelectField from "./select";
import MultiSelect from "./multi-select";

const onChange = (path, value) =>
  action("changing entity")(JSON.stringify(path), value);

storiesOf('Edit fields', module)
  .add('StringField', () => (<div>
      <StringField entity={{data: {fieldName: "value"}}} name="fieldName" onChange={onChange} />
      <StringField entity={{data: {}}} name="fieldName2" onChange={onChange} />
    </div>))
  .add('SelectField', () => (<div>
    <SelectField entity={{data: {fieldName: "value"}}}
      options={["value", "value 1", "value 2"]}
      name="fieldName" onChange={onChange} />
    <SelectField entity={{data: {}}}
      options={["value", "value 1", "value 2"]}
      name="fieldName2" onChange={onChange} />
  </div>))
  .add('MultiSelect', () => (<div>
    <MultiSelect entity={{data: {fieldName: ["value", "value 1"]}}}
      options={["value", "value 1", "value 2"]}
      name="fieldName" onChange={onChange} />
    <MultiSelect entity={{data: {}}}
      options={["value", "value 1", "value 2"]}
      name="fieldName2" onChange={onChange} />
  </div>));
