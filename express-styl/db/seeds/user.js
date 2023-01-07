/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {id: 1, name: 'Hettie Marshall', email: 'lantunde@acbo.va', password: "lantunde@acbo.va"},
    {id: 2, name: 'Hester Owens', email: 'zo@girih.lv', password: "lantunde@acbo.va"},
    {id: 3, name: 'Henry Jackson', email: 'bekamohi@owo.mt', password: "lantunde@acbo.va"}
  ]);
};
