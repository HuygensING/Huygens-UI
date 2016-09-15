import React from "react";
import PropertyForm from "./property-form/property-form";

class CollectionForm extends React.Component {
  render() {
    const { onRemoveCustomProperty } = this.props;

    return (
      <div className="container basic-margin">
        <PropertyForm name="givenName" type="text" confirmed={false} canConfirm={true} />
        <PropertyForm name="remarks" type="text" confirmed={true} custom={true} onRemoveCustomProperty={onRemoveCustomProperty} />
      </div>
    );
  }
}

export default CollectionForm;