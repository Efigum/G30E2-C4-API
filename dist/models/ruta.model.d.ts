import { Entity } from '@loopback/repository';
export declare class Ruta extends Entity {
    id?: string;
    origen: string;
    destino: string;
    tiempo_estimado: string;
    constructor(data?: Partial<Ruta>);
}
export interface RutaRelations {
}
export declare type RutaWithRelations = Ruta & RutaRelations;
