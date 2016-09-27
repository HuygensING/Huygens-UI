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
  messages: {
    log: [
      {type: "ERROR_MESSAGE", message: "Something went wrong on the server"},
      {type: "SUCCESS_MESSAGE", message: "Something went ok on the server"},
      {type: "OTHER_TYPE", message: "invisible"}
    ]
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
        relationCollection: false,
        properties: [{

            "name": "types",
            "type": "multiselect",
            "options": [
                "ARCHETYPE",
                "AUTHOR",
                "PSEUDONYM",
                "READER"
            ]

        },
        {

            "name": "gender",
            "type": "select",
            "options": [
                "UNKNOWN",
                "MALE",
                "FEMALE",
                "NOT_APPLICABLE"
            ]

        },
        {

            "name": "birthDate",
            "type": "datable"

        },
        {

            "name": "deathDate",
            "type": "datable"

        }]
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
      _id: "some id",
      birthDate: "1928",
      deathDate: "1950",
      gender: "FEMALE",
      types: ["AUTHOR", "PSEUDONYM"]
    }
  },
  messages: { log: [] }
};

const actions = {
    onPaginateLeft: action("paginating left"),
    onPaginateRight: action("paginating right"),
    onSave: action("saving current entity"),
    onSelect: action("selecting entity"),
    onNew: action("making new entity"),
    onSelectDomain: action("selecting domain"),
    onQuickSearchQueryChange: action("setting quick search query"),
    onQuickSearch: action("starting quick search"),
    onDismissMessage: action("dismissing message"),
    onDelete: action("deleting current entity"),
    onChange: action("changing field")
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
