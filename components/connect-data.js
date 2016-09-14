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

  render() {

    const { uploadedFileName, sheets } = this.props;

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
      <CollectionIndex />

      <CollectionForm />
      <CollectionTable />
    </div>);
  }
}

export default ConnectData;