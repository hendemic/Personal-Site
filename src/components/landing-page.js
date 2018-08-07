
import React from "react"
import styles from "./landing-page.module.scss"


export default (props) => (
    <div className={styles.container}>
      <div className={styles.center}>
        <h1 className={styles.title}>
          {props.title}
        </h1>
        <span className="subtitle">
          {props.subtitle}
        </span>
      </div>

    </div>
)
