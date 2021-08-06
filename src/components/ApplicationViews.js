import React from "react"
import { Route } from "react-router-dom"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetails } from "./animal/AnimalDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalSearch } from "./animal/AnimalSearch"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { LocationDetails } from "./location/LocationDetail"



export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                <AnimalProvider>
                    <EmployeeProvider>
                        {/* Render the location list when http://localhost:3000/ */}
                        <Route exact path="/" render={
                            props => <LocationList {...props} />
                        } />
                        <Route path="/locations/:locationId(\d+)" render={
                            props => <LocationDetails {...props} />
                        } />
                    </EmployeeProvider>
                </AnimalProvider>
            </LocationProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalSearch />
                            <AnimalList />
                        </Route>

                        <Route exact path="/animals/create" render={
                            props => <AnimalForm {...props} />
                        } />

                        <Route path="/animals/:animalId(\d+)" render={
                            props => <AnimalDetails {...props} />
                        } />
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <AnimalProvider>
                    <LocationProvider>
                        <Route exact path="/employees" render={
                            props => <EmployeeList {...props} />
                        } />

                        <Route exact path="/employees/create" render={
                            props => <EmployeeForm {...props} />
                        } />

                        {/* New route for showing employee details */}
                        <Route path="/employees/:employeeId(\d+)" render={
                            props => <EmployeeDetail {...props} />
                        } />
                    </LocationProvider>
                </AnimalProvider>
            </EmployeeProvider>
        </>
    )
}