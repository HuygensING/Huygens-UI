import React from "react"

import StringField from "./fields/string-field";
import SelectField from "./fields/select";
import MultiSelectField from "./fields/multi-select";
import RelationField from "./fields/relation";

const fieldMap = {
	"string": (fieldDef, props) => (<StringField {...props} name={fieldDef.name} />),
	"text": (fieldDef, props) => (<StringField {...props} name={fieldDef.name} />),
	"datable": (fieldDef, props) => (<StringField {...props} name={fieldDef.name} />),
	"multiselect": (fieldDef, props) => (<MultiSelectField {...props} name={fieldDef.name} options={fieldDef.options} />),
	"select": (fieldDef, props) => (<SelectField {...props} name={fieldDef.name} options={fieldDef.options} />),
	"relation": (fieldDef, props) => (<RelationField {...props} name={fieldDef.name} path={fieldDef.path} />),
};

class EntityForm extends React.Component {

  render() {
    const { onNew, onDelete, onChange, getAutocompleteValues } = this.props;
    const { entity, currentMode, properties } = this.props;


    return (
      <div className="col-sm-6 col-md-8">
        <div className="basic-margin">
          <button className="btn btn-primary pull-right" onClick={onNew}>
            New {entity.domain.replace(/s$/, "")}
          </button>
        </div>
        {properties.map((fieldDef) =>
          fieldMap[fieldDef.type](fieldDef, {
						key: fieldDef.name,
						entity: entity,
						onChange: onChange,
						getAutocompleteValues: getAutocompleteValues
					})
        )}
        {currentMode === "edit"
          ? (<div className="basic-margin">
              <h4>Delete</h4>
              <buton className="btn btn-danger" onClick={onDelete}>
                Delete {entity.domain.replace(/s$/, "")}
              </buton>
            </div>
          ) : null}
      </div>
    )
  }
}

export default EntityForm;
