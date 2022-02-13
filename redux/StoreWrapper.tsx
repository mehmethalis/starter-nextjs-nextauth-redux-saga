import {ReactNode, useEffect, useState} from "react"
import {useDispatch, useStore} from "react-redux";
import {getSession} from "next-auth/react";
import {verify} from "./actions/authAction";

const StoreWrapper = ({children}: { children: ReactNode }) => {
    const store = useStore()
    const dispatch = useDispatch();
    const {userState} = store.getState()
    const [loading, setLoading] = useState(true);

    const checkUser = async () => {
        const session: any = await getSession()
        if (session) {
            const {accessToken} = session
            dispatch(verify(accessToken))
            setLoading(false)
            return
        }
        setLoading(false)
    }

    useEffect(() => {
        if (userState.isLogin) {
            setLoading(false)
            return
        }
        checkUser()


    }, [userState]);

    return loading ? <></> : <>{children}</>
}

export default StoreWrapper;