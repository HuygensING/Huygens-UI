import React from "react"

class EntityForm extends React.Component {

  render() {
    const { onNew, onDelete } = this.props;
    const { entity, currentMode } = this.props;

    return (
      <div className="col-sm-6 col-md-8">
        <div className="basic-margin">
          <button className="btn btn-primary pull-right" onClick={onNew}>
            New {entity.domain.replace(/s$/, "")}
          </button>
        </div>

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
