import { Component } from "react";
//css가 해당 import한 component에만 적용되는 것처럼 보이지만
//실제로는 전체 웹사이트 모든 component에 적용가능하다
import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
