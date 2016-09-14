import React from 'react';
import Page from './page.jsx'
import FirstUpload from './firstUpload.jsx'
import ConnectToArchetype from "./connect-to-archetype";


function App(props) {
  const hasVres = Object.keys(props.userdata.myVres).length > 0;
  const { location: { pathname } } = props;

  if (pathname === "/") {
    return (
      <Page username={props.userdata.userId} vres={props.userdata.vres} showDatasets={!props.importData.isUploading}>
        {hasVres ? null :
          <FirstUpload
            __MockOnLogin={props.onLogin}
            onUploadFileSelect={props.onDataSetUpload}
            isUploading={props.importData.isUploading}
            userId={props.userdata.userId}
          />}
      </Page>
    );
  } else if(pathname === "/maparchetypes") {
    return (
      <Page username={props.userdata.userId} vres={props.userdata.vres} showDatasets={false}>
        <ConnectToArchetype
          mappings={props.mappings}
          sheets={props.importData.sheets}
          uploadedFileName={props.importData.uploadedFileName}
          archetype={props.archetype}
          onMapCollectionArchetype={props.onMapCollectionArchetype}
          onConfirmCollectionArchetypeMappings={props.onConfirmCollectionArchetypeMappings}
        />
      </Page>
    );
  } else {
    return (<div />);
  }
}

export default App;
