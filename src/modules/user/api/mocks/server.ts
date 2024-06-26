import { setupServer } from 'msw/node';
import { httpHandlers, graphqlHandlers } from './handlers';

export const mockServer = setupServer(...httpHandlers, ...graphqlHandlers);
