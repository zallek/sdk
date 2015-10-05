/**
 * Creates a controller enhancer that applies middleware to the dispatch method
 */
export default function applyMiddleware(...middlewares) {
  return (controller) => {
    return controller.map((operation, operationId) => {
      return (...args) => {
        middlewares.each(middleware => {
          args = middleware(operationId)(...args);
        });
      };
    });
  };
}
