import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import style from './style'

type Props = {

};
export class Header extends React.Component {
  props: Props;

  render () {
    return (
      <AppBar className={style.appbar} flat>
        <h1>Test</h1>
      </AppBar>
    )
  }
}

export default Header
