const db = require("../db");

class Service {
  constructor(service) {
    this.service = service;
  }
  items = async () => await this.service("finance");
  addItem = async (data) =>
    await (await this.service("finance").insert(data).returning("*"))[0];
  updateItem = async (id, data) =>
    await (
      await this.service("finance").where({ id }).update(data).returning("*")
    )[0];
  dropItem = async (filter) => {
    if (filter.id) {
      return await this.service("finance").where({ id: filter.id }).delete();
    }

    throw new Error("Favor passar um parametro!!!");
  };
}

module.exports = new Service(db);
