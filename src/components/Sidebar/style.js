import styled from 'styled-components'

export const Div = styled.div`
    background-color: rgba(2, 2, 2, 0.42);
    width: 100%;
    height: 100%;
    position: relative;
`

export const CityWrapper = styled.div`
    height: 100%;
    overflow-y: hidden;
    position: absolute;
    width: 100%;
    height: calc(100% - 48px);
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
        background-color: black;
    }
    &::-webkit-scrollbar-button {display:none}
`
