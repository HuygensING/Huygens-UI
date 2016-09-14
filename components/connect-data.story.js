import React from "react";
import { storiesOf, action } from "@kadira/storybook";
import ConnectData from "./connect-data";

const initialData = {
  activeCollection: 'migranten',
  sheets: [
    {collection: 'migranten', variables: ["ID", "Voornaam", "tussenvoegsel", "Achternaam", "GeschrevenDocument", "Genoemd in", "Is getrouwd met"]},
    {collection: 'locaties', variables: ["naam", "land", "opmerkingen"]}
  ],
  uploadedFileName: "data.xls",
  archetype: {
    persons: {},
    locations: {}
  },
  mappings: {
    collections: {
      migranten: {
        archetypeName: 'persons',
        mappings: [{confirmed: false}, {confirmed: false}],
        ignoredColumns: [],
      },
      locaties: {
        archetypeName: 'locations',
        mappings: [{confirmed: false}, {confirmed: false}],
        ignoredColumns: [],
      }
    }
  }
};

const ignoreLocations = {
  ...initialData,
  mappings: {
    ...initialData.mappings,
    collections: {
      ...initialData.mappings.collections,
      locaties: {
        ...initialData.mappings.collections.locaties,
        ignoredColumns: ["naam", "land", "opmerkingen"]
      }
    }
  }
};

const locationsActive = {
  ...ignoreLocations,
  activeCollection: 'locaties',
};

storiesOf('Connect data', module)
  .add('initially', () => (
    <ConnectData {...initialData} />
  ))
  .add('ignore all location columns', () => (
    <ConnectData {...ignoreLocations} />
  ))
  .add('locations is active', () => (
    <ConnectData {...locationsActive} />
  ));

