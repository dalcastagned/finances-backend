module.exports = {
  Query: {
    contatos: async (obj, args, context, info) =>
      await context.service.contatos(),
  },
  Mutation: {
    criarContato: async (_, { data }, { service }) =>
      await service.criarContato(data),
    atualizarContato: async (_, { id, data }, { service }) =>
      await service.atualizarContato(id, data),
    deletarContato: async (_, { filtro }, { service }) =>
      await service.deletarContato(filtro),
  },
};
