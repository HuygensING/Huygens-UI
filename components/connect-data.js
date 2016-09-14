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
/*
[{
  active: false,
  archetypeName: "",
  complete: false,
  collectionName: ""
}]
*/
    const { uploadedFileName, sheets, activeCollection, mappings } = this.props;

    const collectionTabs = sheets.map((sheet) => ({
      collectionName: sheet.collection,
      archetypeName: mappings.collections[sheet.collection].archetypeName,
      active: activeCollection === sheet.collection,
      complete: this.mappingsAreComplete(sheet)
    }));
    const message = this.state.messageClosed ? null : (
      <div className="alert alert-info alert-dismissible" role="alert">
        <button type="button" className="close" onClick={this.closeMessage.bind(this)}><span>&times;</span></button>
        {sheets.map((sheet) => <em>{sheet.collection}</em>)
          .reduce((accu, elem) => accu === null ? [elem] : [...accu, ' and ', elem], null)
        } from <em>{uploadedFileName}</em> are connected to the Timbuctoo Archetypes.
      </div>
    );

    return (<div>
      <div className="container basic-margin">
        <h2 className="small-margin">Upload and connect your dataset</h2>
        {message}
        <p>Connect the excel columns to the properties of the Archetypes</p>
      </div>
      <CollectionIndex collectionTabs={collectionTabs} />

      <CollectionForm />
      <CollectionTable />
    </div>);
  }
}

export default ConnectData;