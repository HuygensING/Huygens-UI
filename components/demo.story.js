import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import App from './app.jsx';


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
      userId: null,
      myVres: {},
      vres: {}
    },
    importData: {
      isUploading: false
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
  .add('Log in', () => (
      <App onLogin={demo("Initial upload")} {...data()} />
  ))
  .add('Initial upload', () => (
    <App onDataSetUpload={demo("uploading")} {...data({
      userdata: {
        userId: "asd"
      }
    })} />
  ))
  .add('uploading', () => {
    return (
      <App {...data({
        userdata: {
          userId: "asd"
        },
        importData: {
          isUploading: true
        }
      })} />
    );
  });