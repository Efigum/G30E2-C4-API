import { Entity } from '@loopback/repository';
export declare class Aeropuerto extends Entity {
    id?: string;
    nombre: string;
    ciudad: string;
    pais: string;
    coordenada_X: string;
    coordenada_Y: string;
    sigla: string;
    tipo: string;
    constructor(data?: Partial<Aeropuerto>);
}
export interface AeropuertoRelations {
}
export declare type AeropuertoWithRelations = Aeropuerto & AeropuertoRelations;
