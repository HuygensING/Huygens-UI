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
    persons: {},
    locations: {}
  },
  mappings: {
    collections: {
      migranten: {
        archetypeName: 'persons',
        mappings: [{confirmed: false}, {confirmed: false}],
        ignoredColumns: []
      },
      locaties: {
        archetypeName: 'locations',
        mappings: [{confirmed: false}, {confirmed: false}],
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

