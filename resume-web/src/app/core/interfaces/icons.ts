import * as icons from '@assets/icons.json';

export interface IconProps {
    [name: string]: keyof typeof icons;
}