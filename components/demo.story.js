import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import App from './app.jsx';


const actions = {};
[
  "onDataSetUpload"
].forEach(name => actions[name] = action(name));

function override(orig, patch) {
  if (orig && typeof orig == "object") {
    if (patch && typeof patch == "object") {
      var copy = {};
      for (var key in patch) {
        copy[key] = override(orig[key], patch[key]);
      }
      return Object.assign({}, orig, copy);
    }
  }
  return patch;
}

function data(patch) {
  const baseData = {
    userdata: {
      userId: "Bas Doppen",
      myVres: {},
      vres: {}
    }
  };
  if (patch) {
    return override(baseData, patch)
  } else {
    return baseData;
  }
}

function demo(name) {
  return linkTo("demo walkthrough", name);
}

storiesOf('demo walkthrough', module)
  .add('Initial upload', () => (
    <App {...actions} onDataSetUpload={demo("upload 1")} {...data()} />
  ))
  .add('upload 1', () => (
    <App
      {...actions}
      {...data({
        userdata: {
          userId: "asd"
        }
      })} />
  ));