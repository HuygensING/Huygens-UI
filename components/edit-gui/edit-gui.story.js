import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import EditGui from "./edit-gui";
import Paginate from "./entity-index/paginate";

const actions = {
    onPaginateLeft: action("paginating left"),
    onPaginateRight: action("paginating right"),
    onSave: action("saving"),
    onSelect: action("selecting"),
    onNew: action("making new")
};

const data = {
  quickSearch: {
    start: 0,
    list: [],
    rows: 50,
    query: ""
  },
  entity: {
    data: {},
    domain: "person",
    errorMessage: null
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
