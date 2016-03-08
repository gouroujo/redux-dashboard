import React from 'react'
import { connect } from 'react-redux'

import { Responsive, WidthProvider } from 'react-grid-layout'
const ReactGridLayout = WidthProvider(Responsive)
import GridWrapper from 'components/GridWrapper/GridWrapper'

// import { bindActionCreators } from 'redux'

type Props = {

}
export class Dashboard extends React.Component {
  props: Props;

  render () {
    return (
      <ReactGridLayout width={200}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
        <GridWrapper key='1' _grid={{x: 1, y: 0, w: 1, h: 1}}><p>1</p></GridWrapper>
        <GridWrapper key='2' _grid={{x: 1, y: 0, w: 1, h: 1}}><p>2</p></GridWrapper>
        <GridWrapper key='3' _grid={{x: 2, y: 0, w: 1, h: 1}}><p>3</p></GridWrapper>
      </ReactGridLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
