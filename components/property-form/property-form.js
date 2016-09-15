import React from "react";
import SelectField from "../fields/select-field";

import Text from "./text";
// import Relation from "./relation";


const typeMap = {
  text: (props) => <Text {...props} />,
  datable: (props) => <Text {...props} />,
/*
  relation: (props) => <Relation {...props} />
*/
};

class PropertyForm extends React.Component {

  render() {
    const { name, type, custom, collectionName,  confirmed, canConfirm } = this.props;
    const { onRemoveCustomProperty, onConfirmFieldMappings, onUnconfirmFieldMappings } = this.props;

    const confirmButton = canConfirm && !confirmed ?
      <button className="btn btn-success" onClick={() => onConfirmFieldMappings(collectionName, name)}>Confirm</button> : confirmed ?
      <button className="btn btn-blank" onClick={() => onUnconfirmFieldMappings(collectionName, name)}>
        <span className="hi-success glyphicon glyphicon-ok" /></button> : null;

    const formComponent = typeMap[type](this.props);

    return (
      <div className="row small-margin">
        <div className="col-sm-2"><strong>{name}</strong></div>
        <div className="col-sm-1" ><span className="pull-right">({type})</span></div>
        <div className="col-sm-5">
          <SelectField>
            <span type="placeholder" className="from-excel"><img src="images/icon-excel.svg" alt=""/> Select an excel column</span>
            <span value="ID" className="from-excel"><img src="images/icon-excel.svg" alt=""/> ID</span>
            <span value="Voornaam" className="from-excel"><img src="images/icon-excel.svg" alt=""/> Voornaam</span>
            <span value="tussenvoegsel" className="from-excel"><img src="images/icon-excel.svg" alt=""/> tussenvoegsel</span>
            <span value="Achternaam" className="from-excel"><img src="images/icon-excel.svg" alt=""/> Achternaam</span>
            <span value="Geboren in" className="from-excel"><img src="images/icon-excel.svg" alt=""/> Geboren in</span>
          </SelectField>

        </div>
        <div className="col-sm-1">
          { custom
            ? (<button className="btn btn-blank pull-right" type="button" onClick={() => onRemoveCustomProperty(collectionName, name)}>
            <span className="glyphicon glyphicon-remove"/>
          </button>)
            : null }
        </div>
        <div className="col-sm-3 hi-success">

          <span className="pull-right">
            {confirmButton}
          </span>
        </div>
      </div>
    );
  }
}

export default PropertyForm;