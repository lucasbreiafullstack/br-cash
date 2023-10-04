import styled from "styled-components"

export const Container = styled.div `
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const FormSignup = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const InputSignup = styled.input`
    width: 20rem;
    height: 3rem;
    flex-shrink: 0;
    font-size: 1.4rem;
    padding: 0px 10px 0px 10px;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    background-color: #373737;
`

export const RegisterButton = styled.button`
    display: flex;
    width: 20rem;
    padding: 1.3rem 1.3rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 2.7rem;
    border: none;
    background: linear-gradient(90deg, #373737 0%, #fbfbfb 100%);
    margin-bottom: 1rem;
    color: #FFF;
    text-align: center;
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

export const TermsContract = styled.p`
    color: #000;
    font-family: sans-serif;
    font-size: .8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 20rem;

    a {
        color: #4088CB;
        font-family: sans-serif;
        font-size: .8rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`

export const HeaderSignup = styled.h1`
    display: flex;
    color: #fbfbfb;
    font-family: sans-serif;
    font-size: 2rem;
    padding: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    justify-content: center;
`

export const PasswordView = styled.div`
    position: relative;

    .eye {
        cursor: pointer;
        position: absolute;
        right: 5%;
        top: 30%;
        font-size: 1.4rem;
    }
`

export const CheckboxContract = styled.div `
    color: #000;
    font-family: sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 20rem;
`