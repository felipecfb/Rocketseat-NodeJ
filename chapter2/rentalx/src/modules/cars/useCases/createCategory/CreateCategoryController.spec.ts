import request from 'supertest';

import { app } from '@shared/infra/http/app';

describe('Create Category Controller', () => {
  beforeEach(() => {
    jest.useRealTimers();
  });

  it('should be able to create a new category', async () => {
    const response = await request(app).post('/categories').send({
      name: 'Category Supertest',
      description: 'Category Supertest description',
    });

    console.log(response);

    expect(response.status).toBe(201);
  });
});
