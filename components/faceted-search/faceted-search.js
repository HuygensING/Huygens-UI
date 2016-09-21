import React from "react";
import SelectField from "../fields/select-field";
import SearchFields from "./search-fields";
class FacetedSearch extends React.Component {
  render() {
    const { collections } = this.props;
    const { onCollectionSelect, onSearchFieldChange } = this.props;
    const activeCollection = collections.find((collection) => collection.selected);

    return (
      <div className="container big-margin">
        <div className="row">
          <div className="col-sm-4 col-md-3">
            <div className="basic-margin">
              <SelectField btnClass="btn-default" onChange={onCollectionSelect} noClear={true} value={activeCollection.name}>
                {collections.map((collection) => (
                  <span key={collection.name} value={collection.name}>
                    {collection.label}
                  </span>
                ))}
              </SelectField>
            </div>
            <SearchFields fields={activeCollection.searchFields} onSearchFieldChange={onSearchFieldChange} />
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