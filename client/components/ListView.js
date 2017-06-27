import React, { Component } from 'react'
import { CategoryItem } from './CategoryItem'

class ListView extends Component {
  render() {
    console.log('categories list')
    console.log(this.props)
    const list = this.props.categories.map((category) => {
      <CategoryItem item={category} />
      })
    return (
      {list}
    )
  }

}

export default ListView
