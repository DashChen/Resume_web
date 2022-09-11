export interface link {
    link: string;
    key: string;
    title: string;
    icon: string;
    active: boolean;
    children?: link[];
}