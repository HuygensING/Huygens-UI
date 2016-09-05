import React from 'react';

function Page(props) {
  return (
    <div className="page">
      <div className="basic-margin hi-Green container-fluid">
        <nav className="navbar ">
          <div className="container">
            <div className="navbar-header"> <a className="navbar-brand" href="#"><img src="images/logo-timbuctoo.svg" className="logo" alt="timbuctoo"/></a> </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                {props.username ? <li><a href={props.userlocation || '#'}><span className="glyphicon glyphicon-user"></span> {props.username}</a></li> : null}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {props.children}
      <footer className="footer">
        <div className="container">
          <p className="text-muted">
            <span><img src="images/logo-huygens-ing.svg" className="logo" alt=""/></span>
            <span className="pull-right"><img src="images/logo-clariah.svg" className="logo" alt=""/></span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Page;
