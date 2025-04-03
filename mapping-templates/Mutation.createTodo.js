export function request(ctx) {
  const { title, description } = ctx.arguments;
  const now = new Date().toISOString();
  
  return {
    operation: 'PutItem',
    key: {
      id: { S: ctx.arguments.id }
    },
    attributeValues: {
      title: { S: title },
      description: { S: description },
      createdAt: { S: now },
      updatedAt: { S: now },
      userId: { S: ctx.identity.sub }
    }
  };
}

export function response(ctx) {
  return ctx.result;
} 