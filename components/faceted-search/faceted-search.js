import React from "react";
import SelectField from "../fields/select-field";

class FacetedSearch extends React.Component {
  render() {
    const { collections } = this.props;
    const { onCollectionSelect } = this.props;
    const selectedCollection = collections.find((collection) => collection.selected).name;

    return (
      <div className="container big-margin">
        <div className="row">
          <div className="col-sm-4 col-md-3">
            <SelectField btnClass="btn-default" onChange={onCollectionSelect} noClear={true} value={selectedCollection}>
              {collections.map((collection) => (
                <span key={collection.name} value={collection.name}>
                  {collection.label}
                </span>
              ))}
            </SelectField>
          </div>

          <div className=".hidden-sm col-md-1" />

          <div className="col-sm-8 col-md-8">

          </div>
        </div>
      </div>
    )
  }
}

export default FacetedSearch