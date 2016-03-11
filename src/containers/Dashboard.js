import React from 'react'
import { connect } from 'react-redux'

import { Responsive, WidthProvider } from 'react-grid-layout'
const ReactGridLayout = WidthProvider(Responsive)
import GridWrapper from 'components/GridWrapper/GridWrapper'
// import { bindActionCreators } from 'redux'

type Props = {
  widgets: PropTypes.array
}
export class Dashboard extends React.Component {
  props: Props;

  render () {
    const { widgets } = this.props
    return (
      <ReactGridLayout
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 8, md: 6, sm: 4, xs: 4, xxs: 2}}
        handle='div'>
        {widgets.map((value) =>
          <GridWrapper key={value.id} _grid={{x: 0, y: 0, w: 1, h: 1}}>
            <p>{value.text}</p>
          </GridWrapper>
        )}
      </ReactGridLayout>
    )
  }
}

const mapStateToProps = (state) => (
  {
    widgets: state.widgets
  }
)
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
