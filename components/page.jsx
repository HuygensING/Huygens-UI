import React from 'react';
import DatasetCards from "./dataset-cards";
import Footer from "./footer";

const FOOTER_HEIGHT = 81;

function Page(props) {
  return (
    <div className="page">
      <div className="basic-margin hi-Green container-fluid">
        <nav className="navbar ">
          <div className="container">
            <div className="navbar-header"> <a className="navbar-brand" href="#"><img src="images/logo-timbuctoo.svg" className="logo" alt="timbuctoo"/></a> </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                {props.username ? <li><a href={props.userlocation || '#'}><span className="glyphicon glyphicon-user"/> {props.username}</a></li> : null}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div  style={{marginBottom: `${FOOTER_HEIGHT}px`}}>
        {props.children}
        {props.vres && props.showDatasets ? (
          <div className="container">
            <DatasetCards vres={props.vres} />
          </div>) : null}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
