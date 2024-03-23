// import { Database } from 'better-sqlite3';
import { createServer } from 'http';

export default function () {
  const server = createServer(onRequest);
  server.listen(Number(process.env.PORT));
  return server;
}

function onRequest() {}
