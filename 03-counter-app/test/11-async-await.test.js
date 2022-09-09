import {getImagen} from '../src/11-async-await';
test('eleven', async () => { 
    const url = await getImagen();
    expect(typeof url).toBe('string');
 })