const db = require("../db");

class Service {
  constructor(service) {
    this.service = service;
  }
  items = async () => await this.service("finance");
  criarItem = async (data) =>
    await (await this.service("finance").insert(data).returning("*"))[0];
  atualizarItem = async (id, data) =>
    await (
      await this.service("finance").where({ id }).update(data).returning("*")
    )[0];
  deletarItem = async (filtro) => {
    if (filtro.id) {
      return await this.service("finance").where({ id: filtro.id }).delete();
    }

    throw new Error("Favor passar um parametro!!!");
  };
}

module.exports = new Service(db);
