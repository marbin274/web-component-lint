export interface IProps {
    titulo: string;
    variante: varianteType;
    data: Array<IData>;
}

export interface IData {
    atributo: string;
    valor: string;
}

export type varianteType = 'azul' | 'verde';
