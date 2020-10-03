import styled from 'styled-components'

export const Box = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: calc(100% - 250px);
    color: white;
    & svg {
        width: 15px;
        height: 15px;
        margin-left: 5px;
        fill: yellow;
    }
`

export const CityName = styled.h2`
    margin: 0;
    display: flex;
    align-items: center;
    padding: 25px 0 0 25px;
`

export const CurrentTime = styled.p`
    font-size: 20px;
    margin: 0;
    margin-top: 5px;
    padding: 0 0 0 25px;
`
export const CurrentWeather = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Img = styled.img`
    width: 90px;
`

export const WeatherType = styled.p`
    margin: 0 0 10px;
    font-size: 25px;
`
export const Date = styled.p`
    margin: 0 0 5px;
`
export const DetailWrapper = styled.div`
    display: grid;
    grid-column-gap: 30px;
    grid-auto-flow: column;
`
export const Detail = styled.p`
    margin: 5px 0;
`
