export interface link {
    link: string | null;
    key: string;
    title: string;
    icon: string;
    active: boolean;
    children?: link[];
}