import "../Sign.css"
import styled from "styled-components";
import * as api from "../../api/index"
export default function SignUp() {
  return (
    <LoginContainer> 
      <LoginTitle>Sign Up</LoginTitle>
      <LoginForm>
        <LoginInput name="user-name" />
        <LoginInput name="password" />
        <LoginInput name="email" />
        <LoginSubmit> 
          <Button onClick={handleSignUp}>Sign Up</Button>
        </LoginSubmit>
      </LoginForm>
    </LoginContainer>
  )
}
const handleSignUp = async (e:Event) => {
  e.preventDefault();
  const result = await api.registUser("hyunwk","hyunwk@gmail.com","hyunwk");
  console.log(result);
};
type InputFieldProps = {
  name: string;
};

const LoginInput: React.FC<InputFieldProps> = ({name}): JSX.Element=>  (
  <StyledInputField>
    <Label>{name}</Label>
    <Input className="login-input" type="text" name="{name}" />
  </StyledInputField>
);

const StyledInputField = styled.section`
  display: flex; 
  justify-content: space-between;
  height: 2rem;
  margin: 20px 0;
`
const Label = styled.label`
display: flex;
align-items: center;
`

const Input = styled.input`
  width: 60%;
  height: 2rem;
`

const LoginSubmit  = styled.section`
  display: flex;
  justify-content: end;
  padding: 1rem 0 0 0;
`

const Button = styled.button`
  height: 2rem;
`

const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
`
const LoginTitle = styled.title`
  font-size: 3rem;
`
const LoginForm = styled.form`
  padding: 3rem 3rem 2rem 3rem;
  max-width: 350px;
  width: 100% !important;
  margin: 2rem 0;
  border: 1px solid;
`