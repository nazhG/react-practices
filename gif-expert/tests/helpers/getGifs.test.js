import { getGifs } from '../../src/helpers/getGifs';

describe('pruebas en getGifs', () => {
    test('debe de traer 10 elementos', async() => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });
});