import React from "react"
import styles from "./full-title.module.scss"
import type from "../stylesheets/type.scss"


export default (props) => (
    <div className={styles.container} style={{backgroundColor: props.color}}>
      <div className={styles.center} style={{opacity: props.opac}}>
        <h1 className={styles.title} style={{color: props.textCol}}>
          {props.title}
        </h1>
        <span className="subtitle" style={{color: props.textCol}}>
          {props.subtitle}
        </span>
      </div>
    </div>
)
