import { useEffect, useState } from "react"

const useAuth = (jwt) => {
    const[isAut, setIsAuth] = useState(true)

    useEffect(() => {
        if(jwt.length > 25) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [])

    return isAut
}

export default useAuth