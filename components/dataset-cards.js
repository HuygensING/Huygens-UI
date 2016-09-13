import React from 'react';
import DataSetCard from './datasetCard.jsx';

export default function(props) {
  return (
    <div className="container">
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
  )
};