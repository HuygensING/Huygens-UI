import React from "react";
import CollectionTable from "./collection-table";
import CollectionForm from "./collection-form";
import CollectionIndex from "./collection-index";

class ConnectData extends React.Component {

  constructor(props) {
    super(props);
    this.state = { messageClosed: false };
  }

  closeMessage() {
    this.setState({messageClosed: true});
  }

  renderMessage() {
    const { uploadedFileName, sheets } = this.props;
    return this.state.messageClosed ? null : (
      <div className="alert alert-info alert-dismissible" role="alert">
        <button type="button" className="close" onClick={this.closeMessage.bind(this)}><span>&times;</span></button>
        {sheets.map((sheet) => <em>{sheet.collection}</em>)
          .reduce((accu, elem) => accu === null ? [elem] : [...accu, ' and ', elem], null)
        } from <em>{uploadedFileName}</em> are connected to the Timbuctoo Archetypes.
      </div>
    );
  }

  getConfirmedCols(variables) {
    const { mappings, activeCollection } = this.props;

    return variables
      .map((value, i) => ({value: value, index: i}))
      .filter((colSpec) => mappings.collections[activeCollection].mappings
        .filter((m) => m.confirmed)
        .map((m) => m.variable.map((v) => v.variableName))
        .reduce((a, b) => a.concat(b), [])
        .indexOf(colSpec.value) > -1
      ).map((colSpec) => colSpec.index);
  }

  mappingsAreComplete(sheet) {
    const { mappings } = this.props;

    const confirmedColCount = mappings.collections[sheet.collection].mappings
      .filter((m) => m.confirmed)
      .map((m) => m.variable.map((v) => v.variableName))
      .reduce((a, b) => a.concat(b), [])
      .filter((x, idx, self) => self.indexOf(x) === idx)
      .length;

    return confirmedColCount + mappings.collections[sheet.collection].ignoredColumns.length === sheet.variables.length;
  }

  transformProps() {
    const { sheets, activeCollection, mappings, archetype } = this.props;
    const collectionData = sheets.find((sheet) => sheet.collection === activeCollection);
    const { rows, variables } = collectionData;


    const confirmedCols = this.getConfirmedCols(variables);
    const { ignoredColumns } = mappings.collections[activeCollection];

    return {
      collectionTabs: sheets.map((sheet) => ({
        collectionName: sheet.collection,
        archetypeName: mappings.collections[sheet.collection].archetypeName,
        active: activeCollection === sheet.collection,
        complete: this.mappingsAreComplete(sheet)
      })),
      rows: rows.map((row) => row.map((cell, i) => ({
        value: cell.value,
        error: cell.error || null,
        ignored: ignoredColumns.indexOf(variables[i]) > -1
      }))),
      headers: variables.map((variable, i) => ({
        name: variable,
        isConfirmed: ignoredColumns.indexOf(i) < 0 && confirmedCols.indexOf(i) > -1,
        isIgnored: ignoredColumns.indexOf(variable) > -1
      })),
      archetypeFields: archetype[mappings.collections[activeCollection].archetypeName],
      propertyMappings: mappings.collections[activeCollection].mappings
    };
  }


  render() {
    const { activeCollection, uploadedFileName } = this.props;
    const { onIgnoreColumnToggle, onSelectCollection, onSetFieldMapping } = this.props;
    const { collectionTabs, rows, headers, archetypeFields, propertyMappings } = this.transformProps();

    return (
      <div>
        <div className="container basic-margin">
          <h2 className="small-margin">Upload and connect your dataset</h2>
          {this.renderMessage()}
          <p>Connect the excel columns to the properties of the Archetypes</p>
        </div>
        <CollectionIndex collectionTabs={collectionTabs} onSelectCollection={onSelectCollection} />

        <CollectionForm columns={headers}
                        collectionName={activeCollection}
                        archetypeFields={archetypeFields}
                        propertyMappings={propertyMappings}
                        onSetFieldMapping={onSetFieldMapping} />

        <div className="container big-margin">
          <p className="from-excel">
            <img src="images/icon-excel.svg" alt=""/>{" "}
            <em>{activeCollection}</em> from {uploadedFileName}
          </p>

          <CollectionTable
            rows={rows}
            headers={headers}
            onIgnoreColumnToggle={(header) => onIgnoreColumnToggle(activeCollection, header)} />
          </div>
      </div>
    );
  }
}

export default ConnectData;