import styled from "styled-components";

export const FormLine = styled.div`
    display: flex;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const BalanceContainer = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    color: #fbfbfb;
    gap: 10rem;

    p{
        display: flex;
        margin-top: -1rem;
    }

    a{
        text-decoration: none;
        color: #fbfbfb;
        cursor: pointer;
        margin-top: 3rem;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
        margin-left: 1rem;
    }
`

export const Username = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    background-color: #fbfbfb;
    

    @media (max-width: 768px) {
        width: 100%;
        
        font-size: 2rem;
        border-radius: 0 0 1rem 1rem;

        p{
            margin-left: 1rem;
        }
    }
`

export const ContainerTransaction = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

export const TransactionSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    a{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #fbfbfb;
        color: #373737;
        font-size: 2rem;
    }

    p{
        color: #fbfbfb;
    }

    @media (max-width: 768px) {
        
    }
`

export const TransactionFilter = styled.label`
    display: flex;

    @media (max-width: 768px) {
       
        
    }
`

export const TransactionTable = styled.table`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const LogoutButton = styled.button`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

