export const request = (ctx) => {
  const { title, content } = ctx.args.todo;
  const now = new Date().toISOString();
  const id = Date.now().toString();
  
  return {
    operation: 'PutItem',
    key: {
      id: { S: id }
    },
    attributeValues: {
      title: { S: title },
      content: { S: content },
      createdAt: { S: now },
      updatedAt: { S: now }
    }
  };
};

export const response = (ctx) => {
  return ctx.result;
}; 