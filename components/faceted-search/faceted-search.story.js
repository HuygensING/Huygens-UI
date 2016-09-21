import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FacetedSearch from './faceted-search';
import TextSearch from "./search-fields/text-search";

const collections = {
  collections: [
    {
      name: "asd_persons",
      label: "Persons",
      selected: true,
      searchFields: [
        {label: "Type a name", field: "name_t", type: "text"}
      ]
    },
    {name: "asd_documents", label: "Documents"},
    {name: "asd_collectives", label: "Collectives"}
  ]
};


const actions = {
  onSearchFieldChange: action("setting search field value"),
  onCollectionSelect: action("selecting collection")
};

storiesOf('FacetedSearch', module)
  .add('text search field', () => (
    <TextSearch field="name" label="Type a name" onChange={action("setting value")} />
  ))
  .add('the container...', () => (
    <FacetedSearch {...collections} {...actions} />
  ));
