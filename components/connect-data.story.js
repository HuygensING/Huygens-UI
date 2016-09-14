import React from "react";
import { storiesOf, action } from "@kadira/storybook";
import ConnectData from "./connect-data";

const initialData = {
  sheets: [
    {collection: 'migranten'},
    {collection: 'locaties'}
  ],
  uploadedFileName: "data.xls",
  archetype: {
    persons: {},
    locations: {}
  },
  mappings: {
    collections: {
      migranten: {
        archetypeName: 'persons'
      },
      locaties: {
        archetypeName: 'locations'
      }
    }
  }
};


storiesOf('Connect data', module)
  .add('initially', () => (
    <ConnectData {...initialData} />
  ));

