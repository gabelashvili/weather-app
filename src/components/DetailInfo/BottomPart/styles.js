import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    display: grid;
    align-items: center;
`

export const Div = styled.div`
    color: white;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 15px;
    padding: 0 15px;
`
export const Box = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Time = styled.p`
    margin: 0;
    border-bottom: 1px solid white;
    width: 70px;
    text-align: center;
    padding: 0 0 5px;
    font-size: 18px;
`

export const Temp = styled.p`
    margin: 0;
    margin-top: 10px;
    color: yellow;
    font-weight: 500;
    font-size: 24px;
`

export const Img = styled.img`
    width: 50px;
    height: 40px;
`
