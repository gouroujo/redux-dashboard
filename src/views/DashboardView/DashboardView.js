import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions } from 'redux/modules/widgets'

import { Button } from 'react-toolbox'
import Dashboard from 'containers/Dashboard'
import style from './style'

const propTypes = {
  widgets: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export class DashboardView extends React.Component {
  render () {
    const { widgets, actions } = this.props
    return (
      <section>
        <Button
          icon='add'
          mini
          accent
          floating
          className={style['playground-button']}
          onClick={actions.addWidget}
        />
        <Dashboard widgets={widgets}/>
      </section>
    )
  }
}

DashboardView.propTypes = propTypes
const mapStateToProps = (state) => ({
  widgets: state.widgets
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)
