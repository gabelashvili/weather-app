import styled from 'styled-components'

export const Div = styled.div`
    height: 100vh;
    background: #0f0c29;
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Section = styled.section`
    width: 70%;
    height: 500px;
    display: grid;
    grid-template-columns: 1fr 2.2fr;
    grid-column-gap: 25px;
`
