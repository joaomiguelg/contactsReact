import styled from "styled-components";

export const Contact = styled.div`

background-color: #FCFCFC;
box-shadow: 0px 4px 4px 0px #00000040;
padding: 16px;
margin-bottom: 32px;
border-radius: 16px;
display: flex;
flex-direction: column;
gap: 12px;


div {
    display: flex;
    gap: 8px;
}

`

export const Title = styled.textarea`

font-size: 18px;
font-weight: bold;
margin-left: 8px;
resize: none;
border: none;


`

export const Adress = styled.textarea`

color: #8B8B8B;
font-size: 14px;
line-height: 24px;
font-family: 'Roboto Mono', monospace;
display: block;
width: 100%;
resize: none;
border: none;
background-color: transparent;


`

export const Mail = styled.textarea`

color: #8B8B8B;
font-size: 14px;
line-height: 12px;
font-family: 'Roboto Mono', monospace;
display: block;
width: 100%;
resize: none;
border: none;
background-color: transparent;

`

export const Button = styled.button`

font-weight: bold;
font-size: 12px;
color: #ffff;
padding: 8px 12px;
border: none;
cursor: pointer;
background-color: #2f3640;
border-radius: 8px;
margin-right: 8px;

`

export const SaveButton = styled(Button)`

background-color: green;

`

export const CancelButton = styled(Button)`

background-color: red;

`