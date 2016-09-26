import React from "react";
import Page from "../page.jsx";

import Paginate from "./entity-index/paginate.js";

class EditGui extends React.Component {

	render() {
		const { quickSearch } = this.props;

		return (
			<Page>

				<div type="footer-body">
					<div className="col-sm-6 col-md-4">
						<Paginate start={quickSearch.start} listLength={quickSearch.list.length} rows={50} />
					</div>
					<div className="col-sm-6 col-md-8">
						[SAVE_FOOTER]
					</div>
				</div>
				<div type="footer-body">
				</div>
			</Page>
		)
	}
}

export default EditGui;
