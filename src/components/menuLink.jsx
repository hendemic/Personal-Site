import React from "react"
import styles from "./menuLink.module.scss"
import type from "../stylesheets/type.scss"


export default (props) => (
  <div className={styles.container}>
    <div className = {styles.fillbox} />
    <div className = {styles.label}>
      {props.menuContent}
    </div>


  </div>


)
