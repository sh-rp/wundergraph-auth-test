import { afterAll, beforeAll, describe, expect, test } from '@jest/globals';
import fetch from 'node-fetch';
import { createTestServer } from '../.wundergraph/generated/testing';

const wg = createTestServer({ fetch: fetch as any });
beforeAll(() => wg.start());
afterAll(() => wg.stop());

describe('test Countries API', () => {
	test('country by code', async () => {
		const result = await wg.client().query({
			operationName: 'Countries',
			input: {
				filter: {
					code: { eq: 'AD' },
				},
			},
		});
		const andorra = result.data?.countries_countries[0];
		expect(andorra?.name).toBe('Andorra');
	});

	test('continents', async () => {
		const result = await wg.client().query({
			operationName: 'Continents',
		});
		expect(result.data?.countries_continents.length).toBe(7);
	});
});


describe('typescript ops', () => {
	test('test op 1', async () => {
	
		const result = await wg.client().query({
			operationName: 'op1',
			input: {
				content: 'Hello World'
			},
		});
		expect(result.data?.content).toBe('Hello World');
	});

	test('test op 2', async () => {
	
		const result = await wg.client().query({
			operationName: 'op2',
		});
		expect(result.data?.content).toBe('Hello World');
	});

});
