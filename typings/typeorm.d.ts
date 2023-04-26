import * as typeorm from 'typeorm';
import { SQLDbNames, LulloFinSqlTbls, DBEntityTypes } from './sql'

declare module 'typeorm' {
  export declare function getConnection(connectionName?: SQLDbNames): typeorm.Connection;

  export declare function OneToOne<T extends LulloFinSqlTbls>(typeFunctionOrTarget: T, inverseSide?: keyof DBEntityTypes<T>, options?: typeorm.RelationOptions): PropertyDecorator;
}
