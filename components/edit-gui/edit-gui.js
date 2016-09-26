import React from "react";
import Page from "../page.jsx";

import Paginate from "./entity-index/paginate";
import SaveFooter from "./entity-form/save-footer"

class EditGui extends React.Component {

	render() {
		const { onSelect, onNew, onSave } = this.props;
		const { quickSearch, entity } = this.props;
		const currentMode = entity.domain && entity.data._id ? "edit" : "new";


		return (
			<Page>

				<div type="footer-body">
					<div className="col-sm-6 col-md-4">
						<Paginate start={quickSearch.start} listLength={quickSearch.list.length} rows={50} />
					</div>
					<div className="col-sm-6 col-md-8">
						<SaveFooter onSave={onSave} onCancel={() => currentMode === "edit" ?
							onSelect({domain: entity.domain, id: entity.data._id}) : onNew(entity.domain)} />
					</div>
				</div>
				<div type="footer-body">
				</div>
			</Page>
		)
	}
}

export default EditGui;
