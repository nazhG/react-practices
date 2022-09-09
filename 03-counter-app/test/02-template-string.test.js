import { getSaludo } from '../src/02-template-string.js';

describe('02', () => { 
    test('get greating', () => {
        expect(getSaludo('fernando'))
        .toBe('Hola fernando');
    });
})