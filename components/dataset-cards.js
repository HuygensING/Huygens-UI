import React from 'react';
import DataSetCard from './datasetCard.jsx';

export default function(props) {
  const { vres } = props;

  return (
    <div className="container">
      <div className="basic-margin">
        <h3>Explore all datasets</h3>
      </div>
      <div className="big-margin">
        { Object.keys(vres).map((vre) => <DataSetCard key={vre} caption={vres[vre].name} />) }
     </div>
    </div>
  )
};