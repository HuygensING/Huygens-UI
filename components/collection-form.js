import React from "react";
import PropertyForm from "./property-form/property-form";

class CollectionForm extends React.Component {

  render() {
    const { columns, archetypeFields, propertyMappings } = this.props;
    const { onRemoveCustomProperty } = this.props;

    const archeTypePropFields = archetypeFields.filter((af) => af.type !== "relation");

    const propertyForms = archeTypePropFields
      .map((af, i) => (
        <PropertyForm columns={columns} custom={false} key={i} name={af.name} type={af.type}
                      propertyMapping={propertyMappings.find((m) => m.property === af.name)}
                      onRemoveCustomProperty={onRemoveCustomProperty} />
      ));

    return (
      <div className="container basic-margin">
        {propertyForms}
      </div>
    );
  }
}

export default CollectionForm;