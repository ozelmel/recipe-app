import React from "react";
import LoginStyle, {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.style";
// import mealSvg from "../../assets/meal.svg";

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg />
        <Header>{"<Mlh/>"} Recipe</Header>
        <StyledForm>
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
