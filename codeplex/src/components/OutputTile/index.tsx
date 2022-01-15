import React from 'react';

import { Wrapper, OutputWindow, OutputTitle, OutputTileContent } from "./OutputTile.styles";

interface Props {
    output: string;
    status: number;
}

const OutputTile: React.FC<Props> = ({ output, status }: Props) => {
    output.trim();
    return (
        <Wrapper>
            <OutputWindow status={status}>
                <OutputTitle>OUTPUT</OutputTitle>
                <OutputTileContent className='outputWindow'>{output}</OutputTileContent>
            </OutputWindow>
        </Wrapper>
    );
}

export default OutputTile;