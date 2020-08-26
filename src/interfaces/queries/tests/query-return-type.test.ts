import { IQuery } from '../query.interface';
import { IQueryHandler } from '../query-handler.interface';
import { QueryBus } from '../../../query-bus';

/**
 * if this file has no type errors, then everything is working fine
 */

interface AReturn {
  thing: number;
  aString: string;
}

class AQuery implements IQuery {
  $result: AReturn;
}

class Handler implements IQueryHandler<AQuery> {
  async execute(command: AQuery) {
    return { thing: 7, aString: 'abc' };
  }
}

class Querier {
  constructor(private queryBus: QueryBus<AQuery>) {}

  thing() {
    return this.queryBus.execute(new AQuery());
  }
}

it('compiles this file without ts errors', () => {
  expect(true).toBeTruthy();
});
