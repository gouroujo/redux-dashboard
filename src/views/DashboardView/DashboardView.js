import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import AddWidgetMenu from 'components/AddWidgetMenu/AddWidgetMenu'

import Dashboard from 'containers/Dashboard'

const propTypes = {
  widgets: PropTypes.array.isRequired
}

export class DashboardView extends React.Component {
  render () {
    const { widgets } = this.props
    return (
      <section>
        <AddWidgetMenu />
        <Dashboard widgets={widgets}/>
      </section>
    )
  }
}

DashboardView.propTypes = propTypes
const mapStateToProps = (state) => ({
  widgets: state.widgets
})

export default connect(mapStateToProps)(DashboardView)
