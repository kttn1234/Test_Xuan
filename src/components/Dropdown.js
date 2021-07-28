import React from "react";
import "./Dropdown.scss";

class Dropdown extends React.Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItem: this.props.items && this.props.items[0]
  };

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  };

  selectItem = item => {
    this.setState({
      selectedItem: item,
      showItems: false
    });
  };

  render() {
    return (
      <div className="dropdown">
        <div className="dropdown__content">
          <div className="dropdown__item" onClick={this.dropDown}>
            {this.state.selectedItem.value}
          </div>
          <ul
            style={{ display: this.state.showItems ? "block" : "none" }}
            className={"dropdown__items"}
          >
            {this.state.items.map(item => (
              <li
                key={item.id}
                onClick={() => this.selectItem(item)}
                className={this.state.selectedItem === item ? "selected" : ""}
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Dropdown;
