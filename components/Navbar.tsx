import React from 'react'
import ActiveLink from './ActiveLink'
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className= { styles.menucontainer }>
      <ActiveLink text="Inicio" href="/"/>
      <ActiveLink text="Conocenos" href="/conocenos"/>
      <ActiveLink text="Contacto" href="/contacto" />
      <ActiveLink text="Pricing" href="/pricing"/>
    </nav>
  )
}

export default Navbar
