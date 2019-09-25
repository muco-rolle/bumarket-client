import { space, color } from "styled-system"
import styled, { css } from 'styled-components';

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-width: 2px;
    border: none;
    border-radius: 3px;
    transition: all color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    font-size: 1.5rem;
    font-family: inherit;
    font-weight: 800;

    cursor: pointer;
    /* background-color: ${({ theme }) => theme.colors.secondaryDark}; */
    /* color: ${({ theme }) => theme.colors.white}; */
    outline: none;


    :hover {
        outline: none;
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.17);
    }

    :active {
        box-shadow: none;        
    }

    /* ${({ color }) => color && css`
        background-color: ${({ theme }) => theme.colors[color]};
    `} */
    ${space}
    ${color}
`;
