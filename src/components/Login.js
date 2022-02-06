import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel porta tellus. Morbi interdum rutrum semper. Sed posuere augue placerat consectetur consectetur. Cras laoreet luctus elit non porta. Sed convallis dui vel scelerisque venenatis. Pellentesque tellus eros, ornare id enim sit amet, vulputate suscipit ex. Quisque vel porta purus. Fusce mollis et arcu id fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: top;

    &:before{
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
        opacity: 0.7;
    }
`;

const CTA = styled.div`
    max-width: 650px;
    width: 80%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CTALogoOne = styled.img`

`;

const SignUp = styled.a`
    width: 100%;
    background-color: #0064e5;
    font-weight: bold;
    padding: 17px 0;
    text-align: center;
    color: f9f9f9;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 80%;
`