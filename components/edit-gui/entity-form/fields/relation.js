import React from "react";

class RelationField extends React.Component {

  onRemove(value) {
		console.log("TODO, remove: ", value);
	}

  render() {
    const { name, entity, onChange } = this.props;
    const values = entity.data["@relations"][this.props.name] || [];
    const itemElements = values.filter((val) => val.accepted).map((value) => (
      <div className="item-element">
        <strong>{value.displayName}</strong>
        <button className="btn btn-blank btn-xs pull-right"
          onClick={() => this.onRemove(value)}>
          <span className="glyphicon glyphicon-remove" />
        </button>
      </div>
    ));

    return (
      <div className="basic-margin">
          {itemElements}
      </div>
    );
  }
}

export default RelationField;
