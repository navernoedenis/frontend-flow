import fs from 'fs';
import path from 'path';
import jsonServer from 'json-server';

const db = path.resolve(__dirname, 'db.json');

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const port = 4000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Emulate server latency
// eslint-disable-next-line @typescript-eslint/no-misused-promises
server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 700);
  });

  next();
});

interface User {
  id: number;
  name: string;
  password: string;
}

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

    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json({ error: error.message });
    }
  }
});

server.use((req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ error: 'Invalid token' });
  }

  next();
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server started running on port: ${port}`);
});
