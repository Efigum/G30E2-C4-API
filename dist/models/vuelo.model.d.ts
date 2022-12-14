import { Entity } from '@loopback/repository';
export declare class Vuelo extends Entity {
    id?: string;
    fecha_inicio: string;
    hora_inicio: string;
    fecha_fin: string;
    hora_fin: string;
    asientos_vendidos: string;
    nombre_piloto: string;
    ruta: string;
    constructor(data?: Partial<Vuelo>);
}
export interface VueloRelations {
}
export declare type VueloWithRelations = Vuelo & VueloRelations;
