import React from "react";
import { storiesOf, action } from "@kadira/storybook";
import ConnectData from "./connect-data";

const initialData = {
  activeCollection: 'migranten',
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
  uploadedFileName: "data.xlsx",
  archetype: {
    persons: [
      {name: "givenName", type: "text"},
      {name: "surname", type: "text"},
      {name: "birthDate", type: "datable"}
    ],
    locations: [
      {name: "name", type: "text"},
      {name: "country", type: "text"},
    ]
  },
  mappings: {
    collections: {
      migranten: {
        archetypeName: 'persons',
        mappings: [],
        ignoredColumns: []
      },
      locaties: {
        archetypeName: 'locations',
        mappings: [{
          property: "name",
          variable: [{variableName: "naam"}],
          confirmed: true
        }, {
            property: "country",
            variable: [{variableName: "land"}],
            confirmed: false
          }
        ],
        ignoredColumns: []
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
        ignoredColumns: ["naam", "land", "opmerkingen"],
        mappings: []
      }
    }
  }
};

const locationsActive = {
  ...initialData,
  activeCollection: 'locaties',
};

storiesOf('Connect data', module)
  .add('initially', () => (
    <ConnectData {...initialData}
                 onIgnoreColumnToggle={action("toggling ignore on column")}
                 onSelectCollection={action("selecting collection")} />
  ))
  .add('ignore all location columns', () => (
    <ConnectData {...ignoreLocations}
                 onIgnoreColumnToggle={action("toggling ignore on column")}
                 onSelectCollection={action("selecting collection")} />
  ))
  .add('locations is active', () => (
    <ConnectData {...locationsActive}
                 onIgnoreColumnToggle={action("toggling ignore on column")}
                 onSelectCollection={action("selecting collection")} />
  ));

