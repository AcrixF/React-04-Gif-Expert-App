
import '@testing-library/jest-dom'
import { getGifs } from '../../components/helpers/GetGifs';

describe('Testing Helper GetGifs', () => {
   
    test('should return an array with 10 elements', async () => {
        const gifs = await getGifs('Dragon Ball');
        expect(gifs.length).toBe(10);
    });
   
    test('should return an empty array if the caterogy is empty', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });


});
