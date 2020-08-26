import { IQuery } from './query.interface';
import { IQueryResult } from './query-result.type';

export interface IQueryBus<QueryBase extends IQuery = IQuery> {
  execute<
    T extends QueryBase = QueryBase,
    TRes extends IQueryResult<T> = IQueryResult<T>
  >(
    query: T,
  ): Promise<TRes>;
}
