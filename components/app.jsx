import React from 'react';
import Page from './page.jsx'
import FirstUpload from './firstUpload.jsx'
import ConnectToArchetype from "./connect-to-archetype";
import ConnectData from "./connect-data";

class App extends React.Component {

  render() {
    const hasVres = Object.keys(this.props.userdata.myVres).length > 0;
    const { location: { pathname }, uploadedFileName, importData: { sheets } } = this.props;

    if (pathname === "/") {
      return (
        <Page username={this.props.userdata.userId} vres={this.props.userdata.vres} showDatasets={!this.props.importData.isUploading}>
          {hasVres ? null :
            <FirstUpload
              __MockOnLogin={this.props.onLogin}
              onUploadFileSelect={this.props.onDataSetUpload}
              isUploading={this.props.importData.isUploading}
              userId={this.props.userdata.userId}
            />}
        </Page>
      );
    } else if (pathname === "/maparchetypes") {
      return (
        <Page username={this.props.userdata.userId} vres={this.props.userdata.vres} showDatasets={false}>
          <div className="container basic-margin">
            <h2 className="small-margin">Upload and connect your dataset</h2>
            <p>We found {sheets.length} collections in the file. Connect the tabs to the Timbuctoo Archetypes.</p>
          </div>

          <ConnectToArchetype
            mappings={this.props.mappings}
            sheets={this.props.importData.sheets}
            uploadedFileName={this.props.importData.uploadedFileName}
            archetype={this.props.archetype}
            onMapCollectionArchetype={this.props.onMapCollectionArchetype}
            onConfirmCollectionArchetypeMappings={this.props.onConfirmCollectionArchetypeMappings}
          />
        </Page>
      );
    } else if (pathname === "/mapdata") {
      return (
        <Page username={this.props.userdata.userId} vres={this.props.userdata.vres} showDatasets={false}>
          <div className="container basic-margin">
            <h2 className="small-margin">Upload and connect your dataset</h2>
            <p>Connect the excel columns to the properties of the Archetypes</p>
          </div>
          <ConnectData
            {...this.props}
          />
        </Page>
      );  } else {
      return (<div />);
    }
  }
}

export default App;
