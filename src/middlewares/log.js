
export function log(operationId) {
  return (params, next) => {
    console.log('Start', operationId);
    return [params, () => {
      console.log('End', operationId);
      next(...arguments);
    }];
  };
}
