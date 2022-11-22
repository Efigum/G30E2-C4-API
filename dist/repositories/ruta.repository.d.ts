import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Ruta, RutaRelations } from '../models';
export declare class RutaRepository extends DefaultCrudRepository<Ruta, typeof Ruta.prototype.id, RutaRelations> {
    constructor(dataSource: MongoDataSource);
}
