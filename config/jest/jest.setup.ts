import '@testing-library/jest-dom';
import 'whatwg-fetch';

import { server } from 'shared/config/tests/mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
