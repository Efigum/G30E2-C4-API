import { ApiCiclo4Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: ApiCiclo4Application;
    client: Client;
}
