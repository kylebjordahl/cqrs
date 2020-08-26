import { IQuery } from './query.interface';
import { IQueryResult } from './query-result.type';

export interface IQueryHandler<
  T extends IQuery = any,
  TRes extends IQueryResult<T> = IQueryResult<T>
> {
  execute(query: T): Promise<TRes>;
}
