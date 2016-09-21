import React from "react";
import TextSearch from "./search-fields/text-search";

const components = {
  text: TextSearch,
  "list-facet": () => null,
  "range-facet": () => null
};

class SearchFields extends React.Component {

  render() {
    const { fields, onSearchFieldChange, results } = this.props;

    return (
      <div className="facet-group">
        {fields.map((searchField, i) => {
          const { type, field } = searchField;
          const SearchComponent = components[type];
          const facets = type === "list-facet" || type === "range-facet" ? results.facets[field] || [] : null;
          return (<SearchComponent key={`${i}_${field}`} facets={facets} onChange={onSearchFieldChange}
                                   field={searchField.field} label={searchField.label} value={searchField.value} />)
        })}
      </div>
    )
  }
}

export default SearchFields;