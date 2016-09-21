import React from "react";
import SelectField from "../fields/select-field";
import SearchFields from "./search-fields";
import Page from "../page.jsx";
import CurrentQuery from "./current-query";

class FacetedSearch extends React.Component {
  render() {
    const { collections } = this.props;
    const { onCollectionSelect, onSearchFieldChange, onClearSearch } = this.props;
    const activeCollection = collections.find((collection) => collection.selected);

    return (
      <Page>
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
              <SearchFields fields={activeCollection.query.searchFields} results={activeCollection.results} onSearchFieldChange={onSearchFieldChange} />
            </div>

            <div className=".hidden-sm col-md-1" />

            <div className="col-sm-8 col-md-8">

            </div>
          </div>
        </div>
        <span type="footer-body">
          <span className="col-sm-2 col-md-2">
            <button className="btn btn-default" onClick={() => onClearSearch(activeCollection.name)}>
              New Search
            </button>
          </span>
          <div className="col-sm-10 col-md-10 text-right">
            <CurrentQuery onChange={onSearchFieldChange} searchFields={activeCollection.query.searchFields} />
          </div>
        </span>
        <span type="footer-body">
          [PAGINATION]
        </span>
      </Page>
    )
  }
}

export default FacetedSearch