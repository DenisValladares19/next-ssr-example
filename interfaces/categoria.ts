import { mainCollection, offer } from './offer';

export interface categoria {
    id: number;
    categoryUrl: string;
    icon: string;
    name: string;
}

export interface categoriaWithOffer extends categoria {
    offers: offer[];
}

export interface categoryIndex {
    categories: categoriaWithOffer[];
    mainCollection: mainCollection;
}
