import styled from "styled-components";
import {useState} from "react";
import {useDispatch} from "react-redux";
import Button from "../shared/Button";
import Link from "next/link";
import {register} from "../../redux/actions/authAction";

const RegisterForm = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const dispatch = useDispatch()

    const handleRegister = async () => {
        if (password != confirmPassword) {
            setError("Your passwords is not same, check bro.")
            setTimeout(() => setError(null), 3000);
            return
        }
        await setLoading(true)
        dispatch(register({name: name, email: email, password: password}))
        await setLoading(false)
    }
    return (
        <div>
            <Input type="text" name="name" placeholder={"Name"} value={name}
                   onChange={(e) => setName(e.target.value)}/>
            <br/>
            <Input type="text" name="email" placeholder={"E-Mail"} value={email}
                   onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <Input type="password" name="password" placeholder={"Password"} value={password}
                   onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <Input type="password" name="password-confirm" placeholder={"Confirm Password"} value={confirmPassword}
                   onChange={(e) => setConfirmPassword(e.target.value)}/>
            <br/>
            <Button primary={true} onClick={handleRegister}
                    disabled={loading}> {loading ? "Processing..." : "Register"} </Button>
            <Link href={'/auth/signin'}> |Already have an account?</Link>
            <br/>

            {error && <ErrorMessage>! {error} <span></span></ErrorMessage>}
        </div>)
}

const Input = styled.input`
  min-width: 400px;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;

  ::placeholder {
    color: palevioletred;
  }
`;

const ErrorMessage = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: firebrick;
  text-align: center;
  padding: 10px;
  margin-top: 25px;
  background-color: antiquewhite;
  border-radius: 5px;
`
const StyledRegister = styled(RegisterForm)`
  padding: 15px 25px;
`
export default StyledRegister