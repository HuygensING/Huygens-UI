import React from 'react';
import Page from './page.jsx'
import FirstUpload from './firstUpload.jsx'


function App(props) {
  const hasVres = Object.keys(props.userdata.myVres).length > 0;
  return (
    <Page username={props.userdata.userId}>
      {hasVres ? null : <FirstUpload onUploadFileSelect={props.onDataSetUpload} userId={props.userdata.userId} />}
    </Page>
  );
}

export default App;
