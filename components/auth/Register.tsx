import AuthContainer from "./AuthContainer";
import StyledCard from "../shared/Card";
import StyledRegister from "./RegisterForm";

const Register = () => {
    return (
        <AuthContainer>
            <StyledCard title={'Sign Up'}>
                <StyledRegister/>
            </StyledCard>
        </AuthContainer>
    )
}
export default Register