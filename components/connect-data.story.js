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


storiesOf('Connect data', module)
  .add('initially', () => (
    <ConnectData {...initialData} />
  ));

