import styled from 'styled-components';

type Props = {
    selected: boolean;
}

export const Wrapper = styled.div<Props>`
    background-color: ${props => props.selected ? '#F5F5F5' : 'none'};
    height: 100px;
    width: 100px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    padding: 0px;
    display: flex;
    flex-direction: column;
    items-align: center;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    margin: 0px;
    margin-top: 10px;
    border-radius: 8px;
    cursor: pointer;
`;

export const Ltext = styled.div<Props>`
    float: left;
    margin-top: 10px;

    font-family: Josefin Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.065em;
    display: inline-block; 
    vertical-align: middle;
    
    color: ${props => props.selected ? '#000' : '#F5F5F5'};

`;

export const Simg = styled.img`
`;