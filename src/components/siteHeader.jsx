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

      <ul className={styles.menu}>
        <MenuItem Link = "null" menuContent = "about"/>
        <MenuItem Link = "null" menuContent = "resume"/>
        <MenuItem Link = "null" menuContent = "playground"/>
        <MenuItem Link = "null" menuContent = "projects"/>
      </ul>

      {console.log("menu rendered")}

    </div>
)
