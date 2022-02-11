import {GetServerSideProps} from "next";
import {getSession} from "next-auth/react";
import Login from "../../components/auth/Login";

const SignIn = () => {
    return <Login/>
}
export default SignIn;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    } else {
        return {
            props: {session}
        }
    }
}
