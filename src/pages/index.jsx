import React from "react"

import Landing from "../components/full-title"
import stylesheet from "../stylesheets/index.scss"

export default () => (
    <div>
      <Landing
        title = "Coming soon."
        opac = {0.7}
        subtitle = "But first let me figure out React."
      />

      <Landing
        color = 'white'
        textCol = {stylesheet.colorPrimary}
        opac = {1}
        subtitle = "This is where my portfolio pieces will be!"
      />

    </div>
)
