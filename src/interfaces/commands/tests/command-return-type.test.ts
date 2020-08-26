import { ICommand } from '../command.interface';
import { ICommandHandler } from '../command-handler.interface';
import { CommandBus } from '../../..';

/**
 * if this file has no type errors, then everything is working fine
 */

interface AReturn {
  thing: number;
}

class ACommand implements ICommand {
  $result: AReturn;
}

class Handler implements ICommandHandler<ACommand> {
  async execute(command: ACommand) {
    return { thing: 7 };
  }
}

class Commander {
  constructor(private commandBus: CommandBus<ACommand>) {}

  thing(): Promise<AReturn> {
    return this.commandBus.execute(new ACommand());
  }
}

it('compiles this file without ts errors', () => {
  expect(true).toBeTruthy();
});
