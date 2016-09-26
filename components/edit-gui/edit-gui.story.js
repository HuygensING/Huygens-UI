import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import EditGui from "./edit-gui";
import Paginate from "./entity-index/paginate";

const data = {
  quickSearch: {
    start: 50,
    list: [
      {_id: "id1", "@displayName": "Sara Lomannus"},
      {_id: "id2", "@displayName": "Margareth Fuller"}
    ],
    rows: 50,
    query: ""
  },
  entity: {
    data: {},
    domain: "persons",
    errorMessage: null
  },
  vre: {
    collections: {
      locations: {
        collectionName: "locations",
        collectionLabel: "Locations",
        unknown: false,
        relationCollection: false
      },
      persons: {
        collectionName: "persons",
        collectionLabel: "Persons",
        unknown: false,
        relationCollection: false
      },
      relations: {
        collectionName: "relations",
        collectionLabel: "rels",
        unknown: false,
        relationCollection: true
      },
      unknowns: {
        collectionName: "unknowns",
        collectionLabel: "unknowns",
        unknown: true,
        relationCollection: false
      }
    }
  }
};

const dataInEditMode = {
  ...data,
  entity: {
    ...data.entity,
    data: {
      _id: "some id"
    }
  }
};

const actions = {
    onPaginateLeft: action("paginating left"),
    onPaginateRight: action("paginating right"),
    onSave: action("saving"),
    onSelect: action("selecting entity"),
    onNew: action("making new"),
    onSelectDomain: action("selecting domain"),
    onQuickSearchQueryChange: action("setting quick search query"),
    onQuickSearch: action("starting quick search")
};

storiesOf('EditGui', module)
  .add('paginate entries start', () => (
    <Paginate {...actions} start={0} listLength={50} rows={50} />
  ))
  .add('paginate entries middle', () => (
    <Paginate {...actions} start={50} listLength={50} rows={50} />
  ))
  .add('paginate entries end', () => (
    <Paginate {...actions} start={100} listLength={25} rows={50} />
  ))
  .add('the gui in new mode...', () => (
    <EditGui  {...actions} {...data} />
  ))
  .add('... in edit mode', () => (
    <EditGui  {...actions} {...dataInEditMode} />
  ));
