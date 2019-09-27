import styled, { css } from 'styled-components';
import { color, space, font } from '../../../utils/helpers';

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${space("small3")} ${space("medium")};
    border-width: 2px;
    border: none;
    border-radius: 3px;
    transition: all color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    margin-left: 3rem;
    border-radius: 50px;
    font-size: ${font("sizeBase")};
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

    ${props => props.color && css`
        background-color: ${color(props.color)};
        color: ${color("white")};
    `}
`;
