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
        {sheets.map((sheet) => <em key={sheet.collection}>{sheet.collection}</em>)
          .reduce((accu, elem) => accu === null ? [elem] : [...accu, ' and ', elem], null)
        } from <em>{uploadedFileName}</em> are connected to the Timbuctoo Archetypes.
      </div>
    );
  }

  render() {
    const {
      activeCollection,
      uploadedFileName,
      collectionTabs,
      rows,
      headers,
      archetypeFields,
      propertyMappings,
      customPropertyMappings
    } = this.props;

    const {
      onIgnoreColumnToggle,
      onSelectCollection,
      onSetFieldMapping,
      onRemoveCustomProperty,
      onConfirmFieldMappings,
      onUnconfirmFieldMappings,
      onAddCustomProperty
    } = this.props;

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
                        customPropertyMappings={customPropertyMappings}
                        onSetFieldMapping={onSetFieldMapping}
                        onRemoveCustomProperty={onRemoveCustomProperty}
                        onConfirmFieldMappings={onConfirmFieldMappings}
                        onUnconfirmFieldMappings={onUnconfirmFieldMappings}
                        onAddCustomProperty={onAddCustomProperty} />

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