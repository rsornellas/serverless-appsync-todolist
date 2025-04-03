export function request(ctx) {
  return {
    operation: 'GetItem',
    key: {
      id: { S: ctx.arguments.id }
    }
  };
}

export function response(ctx) {
  return ctx.result;
} 