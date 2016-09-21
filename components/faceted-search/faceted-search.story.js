import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FacetedSearch from './faceted-search';
import TextSearch from "./search-fields/text-search";
import Pagination from "./results/pagination";

const collections = {
  collections: [
    {
      name: "asd_persons",
      label: "Persons",
      selected: true,
      query: {
        searchFields: [
          {label: "Type a name", field: "name_t", type: "text" },
          {label: "Gender", field: "gender_s", type: "list-facet" },
          {label: "Date of birth", field: "gender_s", type: "range-facet" }
        ],
        start: 0,
        rows: 10
      },
      results: {
        numFound: 1320,
        facets: {
        }
      }
    },
    {name: "asd_documents", label: "Documents"},
    {name: "asd_collectives", label: "Collectives"}
  ]
};

const collectionsWithValues = {
  collections: [
    {
      name: "asd_persons",
      label: "Persons",
      selected: true,
      query: {
        searchFields: [
          {label: "Type a name", field: "name_t", type: "text", value: "Robert"},
          {label: "Gender", field: "gender_s", type: "list-facet", value: ["Male", "Unknown"]},
          {label: "Date of birth", field: "gender_s", type: "range-facet", value: [1810, 1820] }

        ],
        start: 0,
        rows: 10
      },
      results: {
        numFound: 1,
        facets: {

        }
      }
    },
    {name: "asd_documents", label: "Documents"},
    {name: "asd_collectives", label: "Collectives"}
  ]
};



const actions = {
  onSearchFieldChange: action("setting search field value"),
  onCollectionSelect: action("selecting collection"),
  onClearSearch: action("clearing search"),
  onPageChange: action("changing page")
};

storiesOf('FacetedSearch', module)
  .add('the search...', () => (
    <FacetedSearch {...collections} {...actions} />
  ))
  .add('...with values', () => (
    <FacetedSearch {...collectionsWithValues} {...actions} />
  ))
  .add('pagination', () => (
    <Pagination onChange={actions.onPageChange} numFound={100} start={0} rows={10} />
  ))
  .add('text search field', () => (
    <TextSearch field="name" label="Type a name" onChange={action("setting value")} />
  ));
