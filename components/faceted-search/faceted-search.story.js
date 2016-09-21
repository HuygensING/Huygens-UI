import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FacetedSearch from './faceted-search';

const data = {
  collections: [
    {name: "asd_persons", label: "Persons", selected: true},
    {name: "asd_documents", label: "Documents"},
    {name: "asd_collectives", label: "Collectives"}
  ]
};

const actions = {
  onCollectionSelect: action("selecting collection")
};

storiesOf('FacetedSearch', module)
  .add('initially...', () => (
    <FacetedSearch {...data} {...actions} />
  ));
