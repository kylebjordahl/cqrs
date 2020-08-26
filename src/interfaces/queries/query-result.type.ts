import { IQuery } from './query.interface';

export type IQueryResult<Q> = Q extends IQuery<infer R> ? R : never;
