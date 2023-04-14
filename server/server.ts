import fs from 'fs';
import path from 'path';
import jsonServer from 'json-server';
import type { RequestHandler } from 'express';

import type { User } from '../src/entities/user';
import type { Profile } from '../src/entities/profile';

const db = path.resolve(__dirname, 'db.json');

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const port = 4000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

const authMiddleware: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  return next();
};

// Emulating server delay
// eslint-disable-next-line @typescript-eslint/no-misused-promises
server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 700);
  });

  next();
});

server.post('/sign-in', (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      throw new Error('Bad credentials');
    }

    const database = JSON.parse(fs.readFileSync(db, 'utf8'));
    const user: User | undefined = database.users.find(
      (u: User) => u.name === name,
    );

    if (!user) {
      throw new Error('Not found');
    }

    if (user.password !== password) {
      throw new Error('Wrong password');
    }

    const profile: Profile = database.profiles.find(
      (p: Profile) => user.id === p.id,
    );

    res.status(200).json({ ...user, profile });
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json({ error: error.message });
    }
  }
});

server.post('/comments', authMiddleware);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server started running on port: ${port}`);
});
