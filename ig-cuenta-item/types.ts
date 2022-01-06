
export interface IProps {
    items: Array<IData>;
}

export interface IData {
    titulo: string;
    valor: string;
    url: string; 
    divisa: {
        moneda: "sol" | "dolar",
        simbolo: "$" | "S/"
    }
}
