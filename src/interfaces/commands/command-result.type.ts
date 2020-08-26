import { ICommand } from './command.interface';

export type ICommandResult<CommandBase> = CommandBase extends ICommand<infer R>
  ? R
  : never;
