import React from "react";
import SelectField from "../fields/select-field";


class Form extends React.Component {


  render() {
    const {collectionData, onSetFieldMapping, onClearFieldMapping, onSetDefaultValue, mappings, name} = this.props;

    const mapping = mappings.collections[collectionData.collection].mappings;
    const propertyMapping = mapping.find((m) => m.property === name) || {};
    const selectedVariable = propertyMapping.variable && propertyMapping.variable.length ? propertyMapping.variable[0] : {};
    const defaultValue = propertyMapping.defaultValue && propertyMapping.defaultValue.length ? propertyMapping.defaultValue[0] : {};

    return (
      <span>
        <SelectField
          onChange={(value) => onSetFieldMapping(collectionData.collection, name, [{variableName: value}])}
          onClear={() => onClearFieldMapping(collectionData.collection, name, 0)}
          options={collectionData.variables} placeholder="Select a column..."
          value={selectedVariable.variableName || null} />

      </span>
    );
  }
}

Form.propTypes = {
  collectionData: React.PropTypes.object,
  mappings: React.PropTypes.object,
  name: React.PropTypes.string,
  onClearFieldMapping: React.PropTypes.func,
  onSetDefaultValue: React.PropTypes.func,
  onSetFieldMapping: React.PropTypes.func
};

export default Form;
