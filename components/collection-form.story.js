import React from "react";
import { storiesOf, action } from "@kadira/storybook";
import CollectionForm from "./collection-form";

const initialData = {
  columns: [
    {name: "foo"},
    {name: "bar"},
    {name: "confirmed", isConfirmed: true},
    {name: "ignored", isIgnored: true}
  ],
  archetypeFields: [
    {name: "givenName", type: "text"},
    {name: "surname", type: "text"},
    {name: "birthDate", type: "datable"}
  ],
  propertyMappings: [

  ]
};


storiesOf('CollectionForm', module)
  .add('we enter with some data', () => (
    <CollectionForm {...initialData} />
  ));

