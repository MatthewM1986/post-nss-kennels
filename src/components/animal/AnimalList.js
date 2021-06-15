import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
// import { LocationContext } from "../location/LocationProvider"
// import { CustomerContext } from "../customer/CustomerProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = ({ history }) => {
    const { getAnimals, animals } = useContext(AnimalContext)

    // Initialization effect hook -> Go get animal data
    useEffect(() => {
        getAnimals()
    }, [])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    animals.map(animal => {
                        return <Animal key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}

// Old Code before refactoring using nested data from API
// export const AnimalList = (props) => {
//     // This state changes when `getAnimals()` is invoked below
//     const { animals, getAnimals } = useContext(AnimalContext)
//     const { locations, getLocations } = useContext(LocationContext)
//     const { customers, getCustomers } = useContext(CustomerContext)

//     /*
//         What's the effect this is reponding to? Component was
//         "mounted" to the DOM. React renders blank HTML first,
//         then gets the data, then re-renders.
//     */
//     useEffect(() => {
//         getLocations()
//             .then(getCustomers)
//             .then(getAnimals)
//     }, [])


//     return (
//         <div className="animals">
//             <h1>Animals</h1>
//             <button onClick={() => props.history.push("/animals/create")}>
//                 Make Appointment
//         </button>
//             <article className="animalList">
//                 {
//                     animals.map(animal => {
//                         const owner = customers.find(c => c.id === animal.customerId)
//                         const clinic = locations.find(l => l.id === animal.locationId)

//                         return <Animal key={animal.id}
//                             location={clinic}
//                             customer={owner}
//                             animal={animal} />
//                     })
//                 }
//             </article>
//         </div>
//     )
// }