export function request(ctx) {
  return {
    operation: 'GetItem',
    key: {
      id: { S: ctx.args.id }
    }
  };
}

export function response(ctx) {
  const item = ctx.result.item;

  return {
    id: item.id.S,
    title: item.title.S,
    content: item.content.S,
    createdAt: item.createdAt.S,
    updatedAt: item.updatedAt.S
  };
}
