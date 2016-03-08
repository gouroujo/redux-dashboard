import React from 'react'
import { Card } from 'react-toolbox/lib/card'

type Props = {
  children: [PropTypes.element],
  style: PropTypes.object
};
export class GridWrapper extends React.Component {
  props: Props;

  render () {
    let children = null
    // see https://github.com/STRML/react-grid-layout/issues/14
    if (Object.prototype.toString.call(this.props.children) === '[object Array]') {
      children = [
        React.cloneElement(this.props.children[0], {
          width: this.props.style.width,
          height: this.props.style.height,
          key: 1
        }),
        React.cloneElement(this.props.children[1], {
          key: 2
        })
      ]
    } else {
      children = React.cloneElement(this.props.children, {
        width: this.props.style.width,
        height: this.props.style.height
      })
    }

    return (
      <Card {...this.props}>
          {children}
      </Card>
    )
  }
}

export default GridWrapper
