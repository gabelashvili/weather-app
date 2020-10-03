import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    border-bottom: 1px solid white;
    background-color: ${(props) => props.isActive && 'rgba(2, 2, 2, 0.82)'};
    cursor: pointer;
    &:hover {
        background-color: rgba(2, 2, 2, 0.82)
    };
    transition: all .3s;
`
export const P = styled.p`
    color: white;
`
