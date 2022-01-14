import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const EditorSide = styled.div`
    height: 85%;
    width: 95%;
    border: 2px solid #fff;
    border-radius: 8px;
    margin-bottom: 2%;
`;

export const EditorHeading = styled.div`
    height: 7%;
    width: 100%;
    border-radius: 8px;
    background-color: #000;
    border-bottom: 1px solid #e5e5e5;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`;

export const ThemeSelect = styled.select`
    position: relative;
    left: 68%;
    width: 14%;
    height: 70%;
    border: 1 px solid white;
    background-color: #000;
    color: #fff;
    font-size: 35%;
    text-align: center;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    font-family: 'Orbitron', sans-serif;
    font-family: 'Ubuntu', sans-serif;
    `;
    
    export const ModeSelect = styled.select`
    position: relative;
    left: 69%;
    width: 14%;
    height: 70%;
    border: 1 px solid white;
    background-color: #000;
    color: #fff;
    font-size: 35%;
    text-align: center;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    font-family: 'Orbitron', sans-serif;
    font-family: 'Ubuntu', sans-serif;
`;

export const DownloadCode = styled.button`
    width: 3%;
    height: 70%;
    background-color: #000;
    color: #fff;
    font-size: 35%;
    text-align: center;
    outline: none;
    display: block;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
    border: none;
`;