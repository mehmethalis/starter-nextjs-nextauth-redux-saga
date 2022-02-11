import styled from "styled-components";
import Button from "../shared/Button";
import Link from "next/link";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions/authAction";

const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch()

    const handleLogin = async () => {
        await setLoading(true)
        dispatch(login({email: email.trim(), password: password.trim()}))
        await setLoading(false)
    }
    return (
        <div>
            <Input type="text" name="email" placeholder={"E-Mail"} value={email}
                   onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <Input type="password" name="password" placeholder={"Password"} value={password}
                   onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <Button primary={true} onClick={handleLogin} disabled={loading}> {loading ? "log in..." : "Login"} </Button>
            <Link href={'/auth/signup'}> |Create new account</Link>
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
const StyledLogin = styled(LoginForm)`
  padding: 15px 25px;
`
export default StyledLogin