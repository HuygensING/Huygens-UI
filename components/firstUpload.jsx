import React from 'react';
import DataSetCard from './datasetCard.jsx';

function FirstUpload(props) {
  return (
    <div className="container ">
      <div className="jumbotron first-upload upload-bg">
        <h2>Upload your first dataset</h2>
        {props.exampleSheetUrl ? <p>Don't have a dataset handy? Here’s an <a href={props.exampleSheetUrl}>example excel sheet</a>.</p> : null}
        <p><btn className="btn btn-primary btn-lg" onClick={props.onUpload || function () {}} role="button"><span className="glyphicon glyphicon-cloud-upload"></span> Upload</btn></p>
      </div>

      <div className="basic-margin">
        <h3>Explore all datasets</h3>
      </div>
      <div className="big-margin">
        <DataSetCard caption="Women Writers" />
        <DataSetCard caption="CKCC" />
        <DataSetCard caption="Charter Portaal" />
        <DataSetCard caption="Women Writers" />
        <DataSetCard caption="CKCC" />
        <DataSetCard caption="Charter Portaal" />
      </div>
    </div>
  );
}

export default FirstUpload;
