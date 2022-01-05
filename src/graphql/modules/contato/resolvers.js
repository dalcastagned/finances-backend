module.exports = {
  Query: {
    items: async (obj, args, context, info) =>
      await context.service.items(),
  },
  Mutation: {
    criarItem: async (_, { data }, { service }) =>
      await service.criarItem(data),
    atualizarItem: async (_, { id, data }, { service }) =>
      await service.atualizarItem(id, data),
    deletarItem: async (_, { filtro }, { service }) =>
      await service.deletarItem(filtro),
  },
};
