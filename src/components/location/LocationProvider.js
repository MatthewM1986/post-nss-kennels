import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const LocationContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then(setLocations)
    }

    const addLocation = location => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
            .then(getLocations)
    }

    const getLocationById = (id) => {
        return fetch(`http://localhost:8088/locations/${id}?_embed=animals&_embed=employees`)
            .then(res => res.json())
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <LocationContext.Provider value={{
            locations, addLocation, getLocations, getLocationById
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}