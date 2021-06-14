import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationDetails = (props) => {
    const { getLocationById } = useContext(LocationContext)
    const [location, setLocation] = useState({ animal: {}, employee: {} })

    useEffect(() => {
        const locationId = parseInt(props.match.params.locationId)
        getLocationById(locationId)
            .then(setLocation)
    }, [])

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__breed">{location.address}</div>
            <div className="location__animals">Animal: {location.animal.name}</div>
            <div className="location__employees">Employee: {location.employee.name}</div>
            <button onClick={() => {
                props.history.push(`/locations/edit/${location.id}`)
            }}>Edit</button>
        </section>
    )
}

// Old Code
// export const LocationDetail = (props) => {
//     return (
//         <section className="location">
//             <h2 className="location__name">{props.location.state.chosenLocation.name}</h2>
//             <address className="location__address">{props.location.state.chosenLocation.address}</address>
//             <div>
//                 <h4>Employees</h4>
//                 {props.location.state.chosenLocation.employees.map(e => e.name).join(", ")}
//             </div>
//             <div>
//                 <h4>Current Residents</h4>
//                 {
//                     props.location.state.chosenLocation.animals.map(a => a.name).join(", ")
//                 }
//             </div>
//         </section>
//     )
// }