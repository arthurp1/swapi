import React, { Component } from 'react'
import { CategoryItem } from './CategoryItem'

class GridView extends Component {
  render() {
    console.log('categories grid')
    console.log(this.props)
    const grid = this.props.categories.categories.map((category) => {
      <CategoryItem item={category} />
      })
    return (
      {grid}
    )
  }

}

export default GridView
