export interface area {
    no: string;
    des: string;
};

export interface areas extends area {
    n?: area[];
};

export interface areasList extends area {
    n?: areas[];
};