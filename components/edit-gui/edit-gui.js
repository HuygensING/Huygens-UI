import React from "react";
import Page from "../page.jsx";

import Paginate from "./entity-index/paginate";
import QuickSearch from "./entity-index/quicksearch";
import SaveFooter from "./entity-form/save-footer"
import CollectionTabs from "./collection-tabs";

class EditGui extends React.Component {

	render() {
		const { onSelect, onNew, onSave, onSelectDomain,
			onQuickSearchQueryChange, onQuickSearch } = this.props;
		const { quickSearch, entity, vre } = this.props;
		const currentMode = entity.domain && entity.data._id ? "edit" : "new";


		return (
			<Page>
				<CollectionTabs collections={vre.collections} onNew={onNew} onSelectDomain={onSelectDomain}
					activeDomain={entity.domain} />
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-md-4">
							<QuickSearch
								onQuickSearchQueryChange={onQuickSearchQueryChange}
								onQuickSearch={onQuickSearch}
								query={quickSearch.query} />
						</div>
						<div className="col-sm-6 col-md-8">
						</div>
					</div>
				</div>

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
