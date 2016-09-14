import React from "react";
import ReactDOM from "react-dom";
import cx from "classnames";

class SelectField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.documentClickListener = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.documentClickListener, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.documentClickListener, false);
  }

  toggleSelect() {
    if(this.state.isOpen) {
      this.setState({isOpen: false});
    } else {
      this.setState({isOpen: true});
    }
  }

  handleDocumentClick(ev) {
    const { isOpen } = this.state;
    if (isOpen && !ReactDOM.findDOMNode(this).contains(ev.target)) {
      this.setState({
        isOpen: false
      });
    }
  }

  render() {
    const { options, onChange, onClear, value } = this.props;

    return (

      <div className={cx("dropdown", {open: this.state.isOpen})}>
        <button className="btn btn-blank dropdown-toggle" onClick={this.toggleSelect.bind(this)}>
          {value || this.props.children} <span className="caret" />
        </button>

        <ul className="dropdown-menu">
          { value ? (
            <li>
              <a onClick={() => { onClear(); this.toggleSelect();}}>
                - clear -
              </a>
            </li>
          ) : null}
          {options.map((option, i) => (
            <li key={i}>
              <a style={{cursor: "pointer"}} onClick={() => { onChange(option); this.toggleSelect(); }}>{option}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

SelectField.propTypes = {
  onChange: React.PropTypes.func,
  onClear: React.PropTypes.func,
  options: React.PropTypes.array,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string
};

export default SelectField;
