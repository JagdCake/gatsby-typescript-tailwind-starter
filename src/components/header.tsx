import { Link } from "gatsby"
import React from "react"
import { FunctionComponent } from "react"
import { ReactElement } from "react"
import { SiteTitleQuery } from "./__generated__/SiteTitleQuery"

const Header: FunctionComponent<SiteTitleQuery> = ({ site }: SiteTitleQuery): ReactElement => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {site}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
