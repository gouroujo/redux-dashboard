import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions } from 'redux/modules/widgets'

import { IconMenu, MenuItem } from 'react-toolbox'
import style from './style'

type Props = {
  actions: PropTypes.object.isRequired
};
export class AddWidgetMenu extends React.Component {
  props: Props;

  render () {
    const addBarChartWidget = () => { this.props.actions.addWidget('bar') }
    const addPieChartWidget = () => { this.props.actions.addWidget('pie') }
    const addLineChartWidget = () => { this.props.actions.addWidget('line') }

    return (
      <IconMenu icon='add' mini accent floating menuRipple className={style['add-button']}>
        <MenuItem value='download' icon='insert_chart' caption='Bar Chart'
          onClick={addBarChartWidget} />
        <MenuItem value='help' icon='pie_chart' caption='Pie Chart'
          onClick={addPieChartWidget} />
        <MenuItem value='multiline chart' icon='multiline_chart' caption='Line Chart'
          onClick={addLineChartWidget} />
      </IconMenu>
    )
  }
}

const mapStateToProps = (state) => ({
  widgets: state.widgets
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(AddWidgetMenu)
