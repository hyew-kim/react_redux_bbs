import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../app/store/user";
import { RootState } from "../../app/store/store";
import { useState } from "react";
import * as api from "../../api/index";
interface User {
  id: string;
  email: string;
  password: string;
}

export default function SignIn() {
  const dispatch = useDispatch();

  const [user, setUser] = useState<User>({ id: "", email: "", password: "" });

  const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const LoginInput: React.FC<InputFieldProps> = ({ name }): JSX.Element => (
    <StyledInputField>
      <Label for="login-input">{name}</Label>
      <Input
        className="login-input"
        onClick={onChangeLogin}
        type="text"
        name="{name}"
      />
    </StyledInputField>
  );

  return (
    <LoginContainer>
      <LoginTitle>Sign In</LoginTitle>
      <LoginForm>
        <LoginInput name="email" />
        <LoginInput name="password" />
        <LoginSubmit>
          <Button onClick={handleSignIn}>Sign Up</Button>
        </LoginSubmit>
        {/* <div className="submit">
          <button onClick={(e) => {
                e.preventDefault();
             dispatch(login({user}))
          }}>
            Sign In 
          </button>
        </div> */}
      </LoginForm>
    </LoginContainer>
  );
}

const handleSignIn = async (e: Event) => {
  e.preventDefault();
  const result = await api.registUser("hyunwk", "hyunwk@gmail.com", "hyunwk");
  console.log(result);
};

type InputFieldProps = {
  name: string;
};

const StyledInputField = styled.section`
  display: flex;
  justify-content: space-between;
  height: 2rem;
  margin: 20px 0;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 60%;
  height: 2rem;
`;

const LoginSubmit = styled.section`
  display: flex;
  justify-content: end;
  padding: 1rem 0 0 0;
`;

const Button = styled.button`
  height: 2rem;
`;

const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
`;
const LoginTitle = styled.title`
  font-size: 3rem;
`;
const LoginForm = styled.form`
  padding: 3rem 3rem 2rem 3rem;
  max-width: 350px;
  width: 100% !important;
  margin: 2rem 0;
  border: 1px solid;
`;
