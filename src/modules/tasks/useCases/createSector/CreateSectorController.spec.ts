// import { hash } from 'bcrypt';
import request from 'supertest';
import { Connection } from 'typeorm';
// import { v4 as uuidv4 } from 'uuid';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('Create Sector Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to create a new sector', async () => {
    const response = await request(app).post('/sector').send({
      description: 'teste',
    });

    expect(response.status).toBe(201);
  });
});
