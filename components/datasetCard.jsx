import React from 'react';

function DataSetCard(props) {
  return (
    <div className="card-dataset">
      <div className="card-dataset btn btn-default explore">Explore<br />
        <strong>{props.caption}</strong></div>
    </div>
  );
}

export default DataSetCard;
