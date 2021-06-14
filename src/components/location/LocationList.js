import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
// import { EmployeeContext } from "../employee/EmployeeProvider"
// import { AnimalContext } from "../animal/AnimalProvider"
import { Location } from "./Location"
// import { Link } from "react-router-dom"
import "./Location.css"

export const LocationList = ({ }) => {
    const { getLocations, locations } = useContext(LocationContext)

    // Initialization effect hook -> Go get animal data
    useEffect(() => {
        getLocations()
    }, [])

    return (
        <>
            <h1>Locations</h1>

            <div className="locations">
                {
                    locations.map(location => {
                        return <Location key={location.id} location={location} />
                    })
                }
            </div>
        </>


        // Old Code
        // export const LocationList = () => {
        //     // This state changes when `getLocations()` is invoked below
        //     const { locations, getLocations } = useContext(LocationContext)
        //     const { animals, getAnimals } = useContext(AnimalContext)
        //     const { employees, getEmployees } = useContext(EmployeeContext)

        //     /*
        //         What's the effect this is reponding to? Component was
        //         "mounted" to the DOM. React renders blank HTML first,
        //         then gets the data, then re-renders.
        //     */
        //     useEffect(() => {
        //         getEmployees()
        //             .then(getAnimals)
        //             .then(getLocations)
        //     }, [])

        //     return (
        //         <div className="locations">
        //             {
        //                 locations.map(location => {
        //                     location.employees = employees.filter(e => e.locationId === location.id)
        //                     location.animals = animals.filter(a => a.locationId === location.id)

        //                     return <article key={`location--${location.id}`} className="card location" style={{ width: `18rem` }}>
        //                         <section className="card-body">

        //                             <Link className="card-link"
        //                                 to={{
        //                                     pathname: `/locations/${location.id}`,
        //                                     state: { chosenLocation: location }
        //                                 }}>
        //                                 <h2 className="card-title">{location.name}</h2>
        //                             </Link>
        //                         </section>
        //                         <section>
        //                             {`${location.employees.length} ${location.employees.length === 1 ? "employee" : "employees"}`}
        //                         </section>
        //                         <section>
        //                             {`${location.animals.length} ${location.animals.length === 1 ? "animal" : "animals"}`}
        //                         </section>
        //                     </article>
        //                 })
        //             }
        //         </div >
        // Older Code
        // <div className="locations">
        //     {
        //         locations.map(loc => <Location key={loc.id} location={loc} />)
        //     }
        // </div>
    )
}