import { ICommand } from './command.interface';
import { ICommandResult } from './command-result.type';

export interface ICommandHandler<
  TCommand extends ICommand<TReturn> = ICommand<any>,
  TReturn = ICommandResult<TCommand>
> {
  execute(command: TCommand): Promise<ICommandResult<TCommand>>;
}
