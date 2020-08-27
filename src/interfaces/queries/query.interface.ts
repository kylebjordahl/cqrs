export interface IQuery<R = unknown> extends Record<any, any> {
  $result?: R;
}
