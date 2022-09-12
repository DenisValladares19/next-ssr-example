import { categoria } from './categoria';
import { company } from './company';

export interface offer {
    id: number;
    buys: number;
    company: string | company;
    estado: string;
    fechaCreacion: string;
    fecha_inicio: string;
    img: string;
    limitTimeUI: string;
    limiteCupones: number;
    logo: string;
    off: number;
    offerName: string;
    offerUrl: string;
    oldPrice: number;
    price: number;
}

export interface collectionOffer {
    id: number;
    idCollection: number;
    idOffer: number;
    previewOffer: offer;
}

export interface collections {
    active: number;
    collection: string;
    creationDate: string;
    creationUser: string;
    id: number;
    modifyDate: string;
    modifyUser: string;
    priority: number;
    offers: collectionOffer[];
}

export interface mainCollection {
    name: string;
    offers: offer[];
}

export interface image {
    description: string;
    id_imagen_oferta: number;
    image: string;
}

export interface condition {
    condition: string;
}

export interface sucursal {
    activo: number;
    codClientePos: number;
    codProveedorPos: number;
    codSucursalPos: number;
    horario: string;
    idComercio: number;
    idDireccion: number;
    idSucursal: number;
    nombreSucursal: string;
    principal: number;
}

export interface offerComplete extends offer {
    sucursales: sucursal[];
    galery: image[];
    conditions: condition[];
    company: company;
    category: categoria;
}
