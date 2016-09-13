import React from 'react';
import Page from './page.jsx'
import FirstUpload from './firstUpload.jsx'


function App(props) {
  const hasVres = Object.keys(props.userdata.myVres).length > 0;

  return (
    <Page username={props.userdata.userId} vres={props.userdata.vres}>
      {hasVres ? null :
          <FirstUpload
              __MockOnLogin={props.onLogin}
              onUploadFileSelect={props.onDataSetUpload}
              isUploading={props.importData.isUploading}
              userId={props.userdata.userId}
               />}
    </Page>
  );
}

export default App;
