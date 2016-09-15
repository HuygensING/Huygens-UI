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

  transformProps() {
    const { sheets, activeCollection, mappings } = this.props;
    const collectionData = sheets.find((sheet) => sheet.collection === activeCollection);
    const { rows, collection, variables } = collectionData;

    const confirmedCols = this.getConfirmedCols(variables);
    const { ignoredColumns } = mappings.collections[activeCollection];

    /*
     rows: [[
      {value: "Boschker", ignored: false},
      {value: "1932", ignored: false, error: "test error"},
      {value: "Oosbaan", ignored: true},
     ], [
      {value: "Mahler", ignored: false},
      {value: "1922", ignored: false},
      {value: "Vlissingen", ignored: true},
     ]],
     headers: [
      {name: "achternaam", isConfirmed: false, isIgnored: false},
      {name: "geboortejaar", isConfirmed: true, isIgnored: false},
      {name: "hasBirthPlace", isConfirmed: false, isIgnored: true}
     ]
     */

    return {
      collectionTabs: sheets.map((sheet) => ({
        collectionName: sheet.collection,
        archetypeName: mappings.collections[sheet.collection].archetypeName,
        active: activeCollection === sheet.collection,
        complete: this.mappingsAreComplete(sheet)
      })),
      rows: [],
      headers: variables.map((variable, i) => ({
        name: variable,
        isConfirmed: confirmedCols.indexOf(i) > -1,
        isIgnored: ignoredColumns.indexOf(variable) > -1
      }))
    };
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

  render() {
    const { activeCollection, onIgnoreColumnToggle } = this.props;
    const { collectionTabs, rows, headers } = this.transformProps();

    return (
      <div>
        <div className="container basic-margin">
          <h2 className="small-margin">Upload and connect your dataset</h2>
          {this.renderMessage()}
          <p>Connect the excel columns to the properties of the Archetypes</p>
        </div>
        <CollectionIndex collectionTabs={collectionTabs} />

        <CollectionForm />

        <div className="container big-margin">
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