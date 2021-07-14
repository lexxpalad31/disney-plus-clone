import styled from "styled-components";

const Login = () => {
  return (
    <LoginContainer>
      <LoginContentBox>
        <LogoOne src="/images/cta-logo-one.svg" />
        <LoginSignUp>GET ALL THERE</LoginSignUp>
        <LoginDesc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam rerum
          repellat omnis soluta consequatur officiis laborum id qui dolorum
          debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur, tenetur?
        </LoginDesc>
        <LogoTwo src="/images/cta-logo-two.png" />
      </LoginContentBox>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: top;

  &:before {
    background: url("/images/login-background.jpg") center center / cover
      no-repeat fixed;
    background-position: top;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;

const LoginContentBox = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const LogoOne = styled.img`
  /* max-height: 120px; */
`;

const LoginSignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const LoginDesc = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const LogoTwo = styled.img`
  margin-top: 10px;
  padding: 0 12px;
  width: 95%;
`;
