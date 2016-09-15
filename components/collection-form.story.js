import React from "react";
import { storiesOf, action } from "@kadira/storybook";
import CollectionForm from "./collection-form";

const initialData = {

};


storiesOf('CollectionForm', module)
  .add('we enter with some data', () => (
    <CollectionForm {...initialData} />
  ));

