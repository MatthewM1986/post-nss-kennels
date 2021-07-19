import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useHistory } from "react-router-dom"
// import { LocationContext } from "../location/LocationProvider"
// import { CustomerContext } from "../customer/CustomerProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = () => {
    const { getAnimals, animals, searchTerms } = useContext(AnimalContext)

    // Since you are no longer ALWAYS displaying all of the animals
    const [filteredAnimals, setFiltered] = useState([])
    const history = useHistory()

    // Initialization effect hook -> Go get animal data
    useEffect(() => {
        getAnimals()
    }, [])

    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching animals
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all animals
            setFiltered(animals)
        }
    }, [searchTerms, animals])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
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