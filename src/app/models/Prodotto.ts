
export interface Ingrediente {
    Id: number;
    Descrizione: string;
    Quantita: number;
    QuantitaMin: number;
    QuantitaMax: number;
    IncrementoPrezzo?: number;
    Immagine: string;
    QuantitaIniziale:  number;
}

export interface Prodotto {
    Id: number;
    Descrizione: string;
    Prezzo: number;
    Categoria: string;
    Ingredienti?: Ingrediente[]
    Immagine: string;
    conGhiaccio?: boolean;
    Quantita: number;
}