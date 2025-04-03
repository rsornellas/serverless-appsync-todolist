export function request(ctx) {
  const { id, title, content } = ctx.args.input;
  const now = new Date().toISOString();

  return {
    operation: 'UpdateItem',
    key: {
      id: { S: id }
    },
    updateExpression: 'SET #title = :title, #content = :content, #updatedAt = :updatedAt',
    expressionAttributeNames: {
      '#title': 'title',
      '#content': 'content'
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
  return ctx.result;
}
