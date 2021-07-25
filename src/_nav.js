import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  // {
  //   _component: 'CNavTitle',
  //   anchor: 'Theme',
  // },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Report',
    to: '#',
    icon: <CIcon name="cil-drop" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Acount',
    to: '#',
    icon: <CIcon name="cil-puzzle" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Add New Account',
        to: '#',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'List Account',
        to: '#',
      },
    ],
  },
]

export default _nav
