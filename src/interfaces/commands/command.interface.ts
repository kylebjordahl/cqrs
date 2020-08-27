export interface ICommand<R = unknown> extends Record<any, any> {
  $result?: R;
}
