export function request(ctx) {
  const { id, title, content } = ctx.args.todo;
  const now = new Date().toISOString();

  return {
    operation: 'UpdateItem',
    key: {
      id: { S: id }
    },
    updateExpression: 'SET #title = :title, #content = :content, #updatedAt = :updatedAt',
    expressionAttributeNames: {
      '#title': 'title',
      '#content': 'content',
      '#updatedAt': 'updatedAt'
    },
    expressionAttributeValues: {
      ':title': { S: title },
      ':content': { S: content },
      ':updatedAt': { S: now }
    },
    returnValues: 'ALL_NEW'
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
