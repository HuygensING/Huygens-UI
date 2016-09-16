import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import App from './app.jsx';
import transformConnectDataProps from "./react-redux-connect/connect-data";


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

function connectDataStepData(patch) {
  const baseData = connectArchetypeStepData();

  baseData.location = {
    pathname: "/mapdata"
  };

  baseData.importData = {
    activeCollection: 'migranten',
    isUploading: false,
    sheets: [
      {
        collection: 'migranten',
        variables: ["ID", "Voornaam", "tussenvoegsel", "Achternaam", "Geboren in"],
        rows: [
          [
            {value: "1"},
            {value: "Hans"},
            {value: ""},
            {value: "Achterberg"},
            {value: "Den Hoorn", error: "niet correct"}
          ]
        ]
      },
      {
        collection: 'locaties',
        variables: ["naam", "land", "opmerkingen"],
        rows: [
          [
            {value: "Den Hoorn"},
            {value: "Nederland"},
            {value: "correct"}
          ]
        ]
      }
    ],
    uploadedFileName: "data.xls",
  };
  baseData.mappings = {
    collections: {
      migranten: {
        archetypeName: 'persons',
        mappings: [{confirmed: false}, {confirmed: false}],
        ignoredColumns: [],
        customProperties: []
      },
      locaties: {
        archetypeName: 'locations',
        mappings: [{confirmed: false}, {confirmed: false}],
        ignoredColumns: [],
        customProperties: []
      }
    }
  };
  baseData.archetype = {
    persons: [
      {name: "givenName", type: "text"},
      {name: "surname", type: "text"},
      {name: "birthDate", type: "datable"}
    ],
    locations: [
      {name: "name", type: "text"},
      {name: "country", type: "text"},
    ]
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

/*
renderMessage() {
  const { uploadedFileName, sheets } = this.props;
  return this.state.messageClosed ? null : (
    <div className="alert alert-info alert-dismissible" role="alert">
      <button type="button" className="close" onClick={this.closeMessage.bind(this)}><span>&times;</span></button>
      {sheets.map((sheet) => <em key={sheet.collection}>{sheet.collection}</em>)
        .reduce((accu, elem) => accu === null ? [elem] : [...accu, ' and ', elem], null)
      } from <em>{uploadedFileName}</em> are connected to the Timbuctoo Archetypes.
    </div>
  );
}
  <div className="container basic-margin">
    <h2 className="small-margin">Upload and connect your dataset</h2>
    {message}
    <p>We found {sheets.length} collections in the file. Connect the tabs to the Timbuctoo Archetypes.</p>
  </div>
 */

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
    <App {...connectDataStepData()} {...transformConnectDataProps(connectDataStepData())} />
  ));