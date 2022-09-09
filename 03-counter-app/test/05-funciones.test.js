import {user} from '../src/05-funciones.js';

describe('five', () => { 
    test('get greating', () => {
        expect(user)
        .toStrictEqual({
            uid: 'ABC123',
            username: 'El_Papi1502'
        });
    });
});