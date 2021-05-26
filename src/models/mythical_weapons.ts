import Client from '../database';

export type Weapon = {
  id: Number,
  name:  string,
  type: string,
  weight: number,
}

export class MythicalWeaponStore {
  async index(): Promise<Weapon[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM mythical_weapons';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get weapons ${err}`);
    }

    // async create(p: Product): Promise { const conn = await Client.connect() const sql = 'INSERT INTO products (name, price) VALUES($1, $2) RETURNING *' const result = await conn .query(sql, [p.name, p.price] const product = result.rows[0 conn.release() return product }

    // async delete(id: string): Promise { const conn = await Client.connect() const sql = 'DELETE FROM products WHERE id=($1)' const result = await conn.query(sql, [id])
  }
}