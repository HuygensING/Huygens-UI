import React from "react";
import SelectField from "./fields/select-field";

class ConnectToArchetype extends React.Component {
  constructor(props) {
    super(props);

    this.state = { messageClosed: false };
  }

  closeMessage() {
    this.setState({messageClosed: true});
  }

  render() {
    const { onMapCollectionArchetype, onConfirmCollectionArchetypeMappings,
      sheets, archetype, mappings, uploadedFileName} = this.props;

    const collectionsAreMapped = Object.keys(mappings.collections).length > 0 &&
      Object.keys(mappings.collections).map((key) => mappings.collections[key].archetypeName).indexOf(null) < 0;

    const message = this.state.messageClosed ? null : (
      <div className="alert alert-info alert-dismissible" role="alert">
        <button type="button" className="close" onClick={this.closeMessage.bind(this)}><span>&times;</span></button>
        {uploadedFileName} is uploaded.
      </div>
    );

    return (
      <div>

        <div className="container basic-margin">
          <h2 className="small-margin">Upload and connect your dataset</h2>
          {message}
          <p>We found {sheets.length} collections in the file. Connect the tabs to the Timbuctoo Archetypes.</p>
        </div>

        <div className="container basic-margin">
          {sheets.map((sheet) => (
            <div className="row" key={sheet.collection}>
              <div className="col-md-2">
                <span className="from-excel">
                  <img src="images/icon-excel.svg" alt=""/> {sheet.collection}
                  </span>
              </div>
              <div className="col-md-8">
                <SelectField
                  onChange={(value) => onMapCollectionArchetype(sheet.collection, value)}
                  onClear={() => onMapCollectionArchetype(sheet.collection, null) }
                  options={Object.keys(archetype).filter((domain) => domain !== "relations").sort()}
                  value={mappings.collections[sheet.collection].archetypeName}>
                    Connect <em>{sheet.collection}</em> to a Timbuctoo archetype.
                </SelectField>
              </div>
              { mappings.collections[sheet.collection].archetypeName ? (
                  <div className="col-sm-1 hi-success">
                    <span className="glyphicon glyphicon-ok pull-right"/>
                  </div>
                ) : null
              }
            </div>
          ))}

        </div>

        <div className="container basic-margin">
          <button onClick={onConfirmCollectionArchetypeMappings} type="button" className="btn btn-success" disabled={!collectionsAreMapped}>
            Connect
          </button>
        </div>
      </div>
    )
  }
}

export default ConnectToArchetype;