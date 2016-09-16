import React from "react";
import SelectField from "../fields/select-field";


class Form extends React.Component {


  render() {
    const { columns, propertyMapping, onColumnSelect, onClearColumn } = this.props;

    const selectedColumn = propertyMapping && propertyMapping.variable[0] ? propertyMapping.variable[0].variableName : null;

    return propertyMapping && propertyMapping.confirmed ? (
      <div className="from-excel" style={{padding: "6px 12px"}}><img src="images/icon-excel.svg" alt=""/> {selectedColumn}</div>
    ) : (
      <SelectField value={selectedColumn}
                   onChange={(column) => onColumnSelect([{variableName: column}])}
                   onClear={() => onClearColumn(0)}
      >
        <span type="placeholder" className="from-excel"><img src="images/icon-excel.svg" alt=""/> Select an excel column</span>
        {columns.filter((col) => col.name === selectedColumn || (!col.isConfirmed && !col.isIgnored) ).map((col) => (
          <span key={col.name} value={col.name} className="from-excel"><img src="images/icon-excel.svg" alt=""/> {col.name}</span>
        ))}
      </SelectField>
    );
  }
}

Form.propTypes = {
  collectionData: React.PropTypes.object,
  mappings: React.PropTypes.object,
  name: React.PropTypes.string,
  onClearFieldMapping: React.PropTypes.func,
  onSetFieldMapping: React.PropTypes.func
};

export default Form;
