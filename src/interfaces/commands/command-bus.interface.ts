import { ICommand } from './command.interface';
import { ICommandResult } from './command-result.type';

export interface ICommandBus<
  CommandBase extends ICommand<TReturn> = ICommand<any>,
  TReturn = ICommandResult<CommandBase>
> {
  execute<T extends CommandBase>(command: T): Promise<ICommandResult<T>>;
}
