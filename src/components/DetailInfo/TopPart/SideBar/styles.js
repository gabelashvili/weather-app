import styled from 'styled-components'

export const Div = styled.div`
    width: 250px;
    background-color: rgba(2, 2, 2, 0.3);
    color: white;
    position: absolute;
    height: 100%;
    overflow-y: hidden;
    cursor: pointer;
    right: 0;
    &::-webkit-scrollbar {
        background-color:#fff;
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color:rgba(2, 2, 2, 0.7);
    }
    &::-webkit-scrollbar-track:hover {
        background-color:rgba(2, 2, 2, 0.7)
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(2, 2, 2, 0.7);
    }
    &::-webkit-scrollbar-button {display:none}
`

export const City = styled.div`
    border-bottom: 1px solid white;
    display: grid;
    grid-template-columns: 0.75fr 1fr 1fr;
    align-items: center;
    height: 70px;
    padding: 0 15px;
`

export const Day = styled.p``

export const Icon = styled.img`
    width: 50px;
    height: 50px;
`

export const Temp = styled.p``
