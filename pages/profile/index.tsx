import {getSession} from "next-auth/react";
import {GetServerSideProps} from "next";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/actions/authAction";


const Profile = (session: any) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    console.log(session,'wrappper seesssio')

    const logoutHandle = async () => {
        setLoading(true)
        dispatch(logout())
        setLoading(false)
    }

    return (
        <div>
            <h1>Here Profile Page {'name'}</h1>
            <span onClick={logoutHandle}><a>Logout</a></span>
            {loading && <h1>Loading...</h1>}
        </div>
    )
}
export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session: any = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/auth/signin',
                permanent: false
            }
        }
    } else {
        return {
            props: {...session}
        }
    }
}
