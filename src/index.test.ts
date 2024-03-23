import { Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import { expect, describe, it } from 'vitest';
import start from './index.js';

describe('sqlite server', () => {
  it('should start on env.PORT', () => {
    process.env.PORT = '1234';
    const server = start();
    expect(server).toBeInstanceOf(Server);
    expect((<AddressInfo>server.address()).port).toEqual(1234);
    server.close();
  });

  it.todo('should run queries', () => {});
});
