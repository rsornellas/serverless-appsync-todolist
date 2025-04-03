export function request(ctx) {
  const { id, title, description } = ctx.arguments;
  const now = new Date().toISOString();
  
  return {
    operation: 'UpdateItem',
    key: {
      id: { S: id }
    },
    update: {
      expression: 'SET #title = :title, #description = :description, #updatedAt = :updatedAt',
      expressionNames: {
        '#title': 'title',
        '#description': 'description', 
        '#updatedAt': 'updatedAt'
      },
      expressionValues: {
        ':title': { S: title },
        ':description': { S: description },
        ':updatedAt': { S: now }
      }
    },
    returnValues: 'ALL_NEW'
  };
}

export function response(ctx) {
  return ctx.result;
}