import styled from 'styled-components'
import Gravatar from 'react-gravatar'
import { Button } from 'react-bootstrap';

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgb(16 21 24 / 5%);
  text-align: center;
  overflow: hidden
`

export const CardHeader = styled.header`
  text-align: right;
  padding: 10px 15px;

  .person-location {
    font-size: 10px
  }
`

export const CardFooter = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: #070A0E;

  .title {
    color: white;
    font-size: 12px;
    display: block;
    margin-bottom: 5px
  }

  .count {
    color: #00D395;
    font-size: 16px;
    font-weight: bold;
    display: block;
  }
`

export const CardPersonImage = styled(Gravatar)`
  border-radius: 50%
`
export const CardPersonInfo = styled.section`
  padding: 20px 0px;

  .person-name {
    margin: 0;
    font-size: 16px
  }

  .person-email {
    font-weight: normal;
    margin: 0;
    font-size: 12px
  }
`

export const BagButton = styled(Button)`
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  width: 40px;
  height: 40px;
  line-height: 10px;
  background-color: #00D395;
  border: none;

  &:disabled {
    background-color: #00D395;
    border: none;
    box-shadow: none;
  }

  &:focus {
    background-color: #00D395;
    border: none;
    box-shadow: none;
  }

  &:hover,
  &:not(:disabled):not(.disabled):active:focus,
  &:not(:disabled):not(.disabled):active {
    background-color: white;
    color: black;
    border: none;
    box-shadow: none;
  }
`
