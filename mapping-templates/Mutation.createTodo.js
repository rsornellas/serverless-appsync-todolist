export function request(ctx) {
  const { title, content } = ctx.args.todo;
  const now = new Date().toISOString();
  const id = crypto.randomUUID(); // mais robusto que Date.now

  return {
    operation: 'PutItem',
    attributeValues: {
      id: { S: id },
      title: { S: title },
      content: { S: content },
      createdAt: { S: now },
      updatedAt: { S: now }
    }
  };
}

export function response(ctx) {
  const item = ctx.result.attributes;

  return {
    id: item.id.S,
    title: item.title.S,
    content: item.content.S,
    createdAt: item.createdAt.S,
    updatedAt: item.updatedAt.S
  };
}
