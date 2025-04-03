export const request = (ctx) => {
  const { id, title, content } = ctx.args.todo;
  const now = new Date().toISOString();
  
  return {
    operation: 'UpdateItem',
    key: {
      id: { S: id }
    },
    update: {
      expression: 'SET #title = :title, #content = :content, #updatedAt = :updatedAt',
      expressionNames: {
        '#title': 'title',
        '#content': 'content',
        '#updatedAt': 'updatedAt'
      },
      expressionValues: {
        ':title': { S: title },
        ':content': { S: content },
        ':updatedAt': { S: now }
      }
    }
  };
};

export const response = (ctx) => {
  return ctx.result;
};
