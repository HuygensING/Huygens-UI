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

function uploadStepsData(patch) {
  const baseData = {
    userdata: {
      userId: null,
      myVres: {},
      vres: {
        'WomenWriters': {name: 'Women Writers'},
        'CKCC': {name: 'CKCC'}
      }
    },
    importData: {
      isUploading: false
    },
    location: {
      pathname: "/"
    }
  };
  if (patch) {
    return override(baseData, patch)
  } else {
    return baseData;
  }
}

function connectArchetypeStepData(patch) {
  const baseData = {...uploadStepsData({
      userdata: {
        userId: "asd",

      },
      importData: {
        isUploading: false,
        sheets: [
          {collection: 'migranten'},
          {collection: 'locaties'}
        ],
        uploadedFileName: "data.xls",
      },
      location: {
        pathname: "/maparchetypes"
      },
      archetype: {
        persons: {},
        locations: {}
      },
      mappings: {
        collections: {
          migranten: {
            archetypeName: null
          },
          locaties: {
            archetypeName: null
          }
        }
      }
    })
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
      <App onLogin={demo("Initial upload")} {...uploadStepsData()} />
  ))
  .add('Initial upload', () => (
    <App onDataSetUpload={demo("uploading")} {...uploadStepsData({
      userdata: {
        userId: "asd"
      }
    })} />
  ))
  .add('uploading', () => (
    <App {...uploadStepsData({
      userdata: {
        userId: "asd",

      },
      importData: {
        isUploading: true
      }
    })} />
  ))
  .add('connect archetype 1', () => (
    <App {...connectArchetypeStepData()} onMapCollectionArchetype={demo('connect archetype 2')} />
  ))
  .add('connect archetype 2', () => (
    <App {...connectArchetypeStepData({
      mappings: {
        collections: {
          migranten: { archetypeName: 'persons' }
        }
      }
    })} onMapCollectionArchetype={demo('connect archetype 3')} />
  ))
  .add('connect archetype 3', () => (
    <App {...connectArchetypeStepData({
      mappings: {
        collections: {
          migranten: { archetypeName: 'persons' },
          locaties:  { archetypeName: 'locations' }
        }
      }
    })} onMapCollectionArchetype={demo('connect archetype 2')}
        onConfirmCollectionArchetypeMappings={demo('connect data 1')}
    />
  ))
  .add('connect data 1', () => (
    <div>TODO</div>
  ));
