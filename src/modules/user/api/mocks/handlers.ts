import * as MSW from 'msw';
import mockUsers from './mock-users.json';

export const httpHandlers: MSW.HttpHandler[] = [
  MSW.http.get('https://randomuser.me/api/', () => {
    return MSW.HttpResponse.json(mockUsers);
  }),
];

export const graphqlHandlers: MSW.GraphQLHandler[] = [
	// MSW.graphql.query('GetUsers', () => {
	// 	return MSW.HttpResponse.json({
	// 		data: {
	// 			users: mockUsers.results,
	// 		},
	// 	});
	// }),
];
