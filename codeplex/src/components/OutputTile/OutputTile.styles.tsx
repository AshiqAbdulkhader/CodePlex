import styled from "styled-components";

type Props = {
    status: number;
}

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const OutputWindow = styled.div<Props>`
    height: 95%;
    width: 90%;
    border: 2px solid white;
    border-radius: 8px;
    background-color: ${props => props.status ? '#03fc03' : '#fc0303'};
    color: #000;
    font-size: 35%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const OutputTitle = styled.div`
    height: 5%;
    color: #000;
    display: flex;
    align-items: center;
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 20px;
    font-weight: bold;
`;

export const OutputTileContent = styled.div`
    height: 95%;
    width: 100%;
    background-color: #000;
    color: #fff;
    display: flex;
    border: 0px solid #000;
    border-top: 2px solid #fff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: monospace, sans-serif;
    font-size: 18px;
    white-space: pre-wrap;
    text-align: left;
    overflow-y: scroll;
`;
