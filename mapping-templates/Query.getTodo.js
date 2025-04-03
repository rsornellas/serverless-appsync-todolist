export const request = (ctx) => {
  return {
    operation: 'GetItem',
    key: {
      id: { S: ctx.args.id }
    }
  };
};

export const response = (ctx) => {
  return ctx.result;
}; 