import React from "react"
import styles from "./full-title.module.scss"


export default (props) => (
    <div className={styles.container} style={{backgroundColor: props.color}}>
      <div className={styles.center}>
        <h1 className={styles.title} style={{color: props.text, opacity: props.opac}}>
          {props.title}
        </h1>
        <span className="subtitle" style={{color: props.text, opacity: props.opac}}>
          {props.subtitle}
        </span>
      </div>
    </div>
)
