import React from "react";

function ConnectToArchetype(props) {

  return (
    <div>

      <div className="container basic-margin">
        <h2 className="small-margin">Upload and connect your dataset</h2>



        <div className="alert alert-info alert-dismissible" role="alert">
          <button type="button" className="close"><span>&times;</span></button>
          Migrants.xlsx is uploaded.
        </div>

        <p>We found 2 collections in the file. Connect the tabs to the Timbuctoo Archetypes.</p>
      </div>

      <div className="container basic-margin">
        <div className="row">
          <div className="col-md-2"><span className="from-excel"><img src="images/icon-excel.svg" alt=""/> migranten</span></div>
          <div className="col-md-8">
            <div className="dropdown">
              <button className="btn btn-blank dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Connect <em>migranten</em> to a Timbuctoo Archetype.
                <span className="caret" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Person</a></li>
                <li><a href="#">Document</a></li>
                <li><a href="#">Keyword</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-1 hi-success"><span className="glyphicon glyphicon-ok pull-right" aria-hidden="true" /></div>
        </div>

        <div className="row">
          <div className="col-md-2"> <span className="from-excel"><img src="images/icon-excel.svg" alt=""/> locaties</span></div>
          <div className="col-md-8">
            <div className="dropdown">
              <button className="btn btn-blank dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Connect <em>locaties</em> to a Timbuctoo Archetype.
                <span className="caret" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><a href="#">Person</a></li>
                <li><a href="#">Document</a></li>
                <li><a href="#">Keyword</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-2 hi-success"></div>
        </div>


      </div>

      <div className="container basic-margin">
        <button type="button" className="btn btn-success"  disabled="disabled">Connect</button>
      </div>
    </div>
  )
}

export default ConnectToArchetype;