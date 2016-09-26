import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import EditGui from "./edit-gui";
import Paginate from "./entity-index/paginate";

const actions = {
    onPaginateLeft: action("paginating left"),
    onPaginateRight: action("paginating right")
};

const data = {
  quickSearch: {
    start: 0,
    list: [],
    rows: 50,
    query: ""
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
  .add('the gui...', () => (
    <EditGui  {...actions} {...data} />
  ));
