export function request(ctx) {
  const { id, title, description } = ctx.arguments;
  const now = new Date().toISOString();
  
  return {
    operation: 'UpdateItem',
    key: {
      id: { S: id }
    },
    update: {
      UpdateExpression: 'SET #title = :title, #description = :description, #updatedAt = :updatedAt',
      ExpressionAttributeNames: {
        '#title': 'title',
        '#description': 'description',
        '#updatedAt': 'updatedAt'
      },
      ExpressionAttributeValues: {
        ':title': { S: title },
        ':description': { S: description },
        ':updatedAt': { S: now }
      }
    }
  };
}

export function response(ctx) {
  return ctx.result;
} 