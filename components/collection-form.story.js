import React from "react";
import { storiesOf, action } from "@kadira/storybook";
import CollectionForm from "./collection-form";

const initialData = {
  columns: [
    {name: "Voornaam", isConfirmed: true},
    {name: "Achternaam"},
    {name: "Alternatief"},
    {name: "ignored", isIgnored: true}
  ],
  archetypeFields: [
    {name: "givenName", type: "text"},
    {name: "surname", type: "text"},
    {name: "birthDate", type: "datable"}
  ],
  propertyMappings: [
    {
      property: "givenName",
      variable: [{variableName: "Voornaam"}],
      confirmed: true
    }, {
      property: "surname",
      variable: [{variableName: "Achternaam"}],
      confirmed: false
    }, {
      property: "custom",
      variable: [{variableName: "Alternatief"}],
    }
  ],
  customPropertyMappings: [
    {
      name: "custom",
      type: "text",
    },
    {
      name: "custom-2",
      type: "text",
    }
  ],
  collectionName: "persons"
};

const actions = {
  onConfirmFieldMappings: action("confirming field mappings"),
  onRemoveCustomProperty: action("removing custom property"),
  onSetFieldMapping: action("setting field mapping"),
  onUnconfirmFieldMappings: action("unconfirming field mappings"),
};


storiesOf('CollectionForm', module)
  .add('all supported types of mappings/state in a row', () => (
    <CollectionForm {...initialData} {...actions} />
  ));

