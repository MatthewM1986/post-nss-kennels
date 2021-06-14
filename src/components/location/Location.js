import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const Location = ({ location }) => (
    <section className="location">
        <h3 className="location__name">
            <Link to={`/locations/${location.id}`}>
                {location.name}
            </Link>
        </h3>
        <div className="location__address">{location.address}</div>
    </section>
)

// Old Code
// export const Location = ({ location }) => (
//     <section className="location">
//         <h3 className="location__name">{location.name}</h3>
//         <address className="location__address">{location.address}</address>
//     </section>
// )