import React from "react";
import SelectField from "../fields/select-field";
import Option from "../fields/select-field/option";

class PropertyForm extends React.Component {

  render() {
    
    return (
      <div className="row small-margin">
        <div className="col-sm-2"><strong>Types</strong></div>
        <div className="col-sm-2" >(text)</div>
        <div className="col-sm-5">
          <button className="btn btn-blank pull-right" type="button"><span className="glyphicon glyphicon-remove"/></button>

          <SelectField>
            <Option type="placeholder">
              <span className="from-excel"><img src="images/icon-excel.svg" alt=""/> Select an excel column</span>
            </Option>
            <Option value="ID">
              <span className="from-excel"><img src="images/icon-excel.svg" alt=""/> ID</span>
            </Option>
            <Option value="Voornaam">
              <span className="from-excel"><img src="images/icon-excel.svg" alt=""/> Voornaam</span>
            </Option>
            <Option value="tussenvoegsel">
              <span className="from-excel"><img src="images/icon-excel.svg" alt=""/> tussenvoegsel</span>
            </Option>
            <Option value="Achternaam">
              <span className="from-excel"><img src="images/icon-excel.svg" alt=""/> Achternaam</span>
            </Option>
            <Option value="Geboren in">
              <span className="from-excel"><img src="images/icon-excel.svg" alt=""/> Geboren in</span>
            </Option>
          </SelectField>

        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-1 hi-success">
          <span className="pull-right">
            <span className="glyphicon glyphicon-ok" />
          </span>
        </div>
      </div>
    );
  }
}

export default PropertyForm;