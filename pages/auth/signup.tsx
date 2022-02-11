import {GetServerSideProps} from "next";
import {getSession} from "next-auth/react";
import Register from "../../components/auth/Register";

const SignUp = () => {
    return <Register/>
}
export default SignUp;

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
