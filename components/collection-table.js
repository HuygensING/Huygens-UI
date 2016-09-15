import React from "react";
import HeaderCell from "./table/header-cell";
import DataRow from "./table/data-row";

class CollectionTable extends React.Component {
  render() {
    const { onIgnoreColumnToggle } = this.props;
    const { rows, headers } = this.props;

    return (
      <div className="table-responsive">
        <table className="table table-bordered table-obtrusive">
          <thead>
            <tr>
              {headers.map((header) => (
                <HeaderCell key={header.name} header={header.name} onIgnoreColumnToggle={onIgnoreColumnToggle}
                            isIgnored={header.isIgnored} isConfirmed={header.isConfirmed} />
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => <DataRow key={i} row={row} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CollectionTable;