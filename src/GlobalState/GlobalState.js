import axios from "axios";
import { useEffect, useState } from "react";
import { globalContext } from "./GlobalStateContext";

export const GlobalState = ({children}) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if(window.localStorage.getItem("token")){
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [])

    const [transfers, setTransfers] = useState([])
    
    const getTransfers = async () => {
        try {
            const token = window.localStorage.getItem("token")

            const config = {
                headers: {
                    Authorization: token
                }
            }

            const response = await axios.get(`/transfers`, config)
            setTransfers(response.data)

        } catch (error) {
            console.error(error.response)
        }
    }

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const token = window.localStorage.getItem("token")

            const config = {
                headers: {
                    Authorization: token
                }
            }

            const response = await axios.get(`/users`, config)
            setUsers(response.data)

        } catch (error) {
            console.error(error.response)
        }
    }

    const context = {
        isLoggedIn,
        setIsLoggedIn,
        transfers,
        getTransfers,
        users,
        getUsers
    }

    return (
        <globalContext.Provider value={context}>
            {children}
        </globalContext.Provider>
    )
}