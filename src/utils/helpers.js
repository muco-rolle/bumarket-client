export const color = colorName => props => props.theme.colors[colorName];
export const space = space => props => props.theme.spaces[space];
export const font = font => props => props.theme.fonts[font];

export const formatMoney = number => {
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts[0];
};
