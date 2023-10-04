import styled from "styled-components"

export const Container = styled.div `
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const FormLogin = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
`

export const LogoContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15%;
`

export const HeaderLogin = styled.h1 `
    color: #fbfbfb;
    font-family: 'Poppins', sans-serif;
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
`

export const SloganLogin = styled.p `
    color: #fbfbfb;
    text-align: center;
    font-family: sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`

export const InputLogin = styled.input `
    width: 16rem;
    height: 3rem;
    flex-shrink: 0;
    font-size: 1.4rem;
    padding: 0px 50px 0px 20px;
    border-radius: 1rem;
    border: none;
    background-color: #373737;
    outline: none;
`

export const ContinueButton = styled.button `
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    width: 20rem;
    height: 3rem;

    padding: 1.3rem 1.3rem;
    margin-bottom: 1rem;
    gap: 1rem;

    border-radius: 2.7rem;
    border: none;
    background: linear-gradient(90deg, #fbfbfb 0%, #373737 100%);
    color: #1a1a1a;

    font-family: sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    cursor: pointer;
    opacity: 0.9;

    :hover{
        transform: scale(1.05);
        opacity: 1; 
    }
`

export const CreateAccountButton = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 20rem;
    height: 3rem;
    padding: 1.3rem 1.3rem;
    gap: 1rem;
    margin-top: 1rem;

    border-radius: 2.7rem;
    border: none;

    background: linear-gradient(90deg, #373737 0%, #fbfbfb 100%);
    color: #1a1a1a;

    font-family: sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    cursor: pointer;
    opacity: 0.9;

    :hover{
        transform: scale(1.05);
        opacity: 1;
    }
`

export const LineBetweenButtons = styled.hr `
    width: 20rem;
    height: 0.10rem;
    border-radius: 50%;
    color: linear-gradient(90deg, #373737 0%, #fbfbfb 100%);
    background: linear-gradient(90deg, #fbfbfb 0%, #373737 100%);

`

export const SpaceButtons = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`

export const PasswordView = styled.div `
    position: relative;

    .eye {
        cursor: pointer;
        position: absolute;
        right: 5%;
        top: 30%;
        font-size: 1.4rem;
        color: #fbfbfb;
    }
`