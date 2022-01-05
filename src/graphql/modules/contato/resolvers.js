module.exports = {
  Query: {
    items: async (obj, args, context, info) =>
      await context.service.items(),
  },
  Mutation: {
    addItem: async (_, { data }, { service }) =>
      await service.addItem(data),
    updateItem: async (_, { id, data }, { service }) =>
      await service.updateItem(id, data),
    dropItem: async (_, { filter }, { service }) =>
      await service.dropItem(filter),
  },
};
