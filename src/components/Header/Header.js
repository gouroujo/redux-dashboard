import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import { Link } from 'react-router'
import style from './style'

type Props = {

};
export class Header extends React.Component {
  props: Props;

  render () {
    return (
      <AppBar className={style.appbar} flat>
        <span className={style.title}>Test</span>
        <nav className={style.navigation}>
          <ul>
            <li><Link activeClassName={style.active} to='/dashboard'>Dashboard</Link></li>
          </ul>
        </nav>
      </AppBar>
    )
  }
}

export default Header
