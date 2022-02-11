import AuthContainer from "./AuthContainer";
import StyledCard from "../shared/Card";
import StyledLogin from "./LoginForm";

const Login = () => {
    return (
        <AuthContainer>
            <StyledCard title={'Sign In'}>
                <StyledLogin/>
            </StyledCard>
        </AuthContainer>
    )
}
export default Login