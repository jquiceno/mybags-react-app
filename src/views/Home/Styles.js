import styled from 'styled-components'
import { Container as bContainer, Col as BCol } from 'react-bootstrap';

export const Container = styled(bContainer)`
    padding: 30px
`

export const Col = styled(BCol)`
    margin-bottom: 15px;
`

export const NewUserButton = styled.button`
    width: 60px;
    height: 60px;
    position: fixed;
    right: 20px;
    bottom: 50px;
    border-radius: 50%;
    font-size: 30px;
    line-height: 10px;
    border: none;
    background-color: #00D395;
    transition: 200ms linear;
    box-sizing: border-box;

    &:hover {
        background-color: #070A0E;
        color: #00D395;
        border: 2px solid #00D395;
    }
`