import React from "react"
import styles from "./siteHeader.module.scss"
import type from "../stylesheets/type.scss"
import logo from '../assets/logo.png' // relative path to image
import MenuItem from "./menuLink"




export default (props) => (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src={logo} />
      </div>
      
      <div className={styles.menu}>
        <MenuItem menuContent = "projects"/>
        <MenuItem menuContent = "playground"/>
        <MenuItem menuContent = "resume"/>
        <MenuItem menuContent = "about"/>
      </div>

      {console.log("menu rendered")}

    </div>
)
