import { retornaArreglo } from '../src/07-deses-arr';
describe('seven', () => { 
    test('get greating', () => {
        expect(retornaArreglo())
        .toStrictEqual(['ABC', 123]);
    });
});