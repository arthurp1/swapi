import React, { Component } from 'react'

class CategoryItem extends Component {

  render() {
    const { item } = this.props
    return (
      <li><a href={item}> Category Item: {item}</a></li>
    )
  }

}

export default CategoryItem
