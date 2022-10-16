export interface skill {
    no: string;
    des: string;
};

export interface skills extends skill {
    n: skill[];
};

export interface skillsList extends skill {
    n?: skills[];
};