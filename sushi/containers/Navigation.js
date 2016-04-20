import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCategory } from '../actions/actions';

export default class Navigation extends Component {
  updateView(category) {
    this.props.changeCategory(category);
  }
  render() {
    const { categories, current } = this.props;
    return (
      <div className="navigation">
        <ul>
          {categories.map((category, i) => {
            return (
              <li
                key={i}
                className={current === category ? 'active' : null}
                onClick={() => this.updateView(category)}>
                {category}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    current: state.activeCategory,
    categories: state.items
      .map((item) => item.category)
      .sort()
      .filter((category, i, list) => !i || category !== list[i-1])
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeCategory: changeCategory
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
