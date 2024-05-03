import { styled } from '@mui/material';
import { CSSProperties, PropsWithChildren } from 'react';


export type FlexProps = PropsWithChildren<{
    align?: CSSProperties['alignItems'];
    direction?: CSSProperties['flexDirection'];
    gap?: CSSProperties['gap'];
    grow?: CSSProperties['flexGrow'];
    height?: CSSProperties['height'];
    justify?: CSSProperties['justifyContent'];
    padding?: CSSProperties['padding'];
    style?: CSSProperties;
    width?: CSSProperties['width'];
    wrap?: CSSProperties['flexWrap'];
}>;

export const Flex = styled('div')<FlexProps>`
    align-items: ${({ align }) => align ?? 'flex-start'};
    display: flex;
    flex-direction: ${({ direction }) => (direction ?? 'row')};
    flex-grow: ${({ grow }) => grow ?? '0'};
    flex-wrap: ${({ wrap }) => wrap ?? 'nowrap'};
    gap: ${({ gap }) => gap ?? 'unset'};
    height: ${({ height }) => height ?? 'unset'};
    justify-content: ${({ justify }) => justify ?? 'flex-start'};
    padding: ${({ padding }) => padding ?? '0'};
    position: relative;
    width: ${({ width }) => width ?? 'unset'};
`;
