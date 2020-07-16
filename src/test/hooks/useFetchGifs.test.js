import '@testing-library/jest-dom'
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Testing Custom Hooks',  () => {
    
    test('should return the init status', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('should return an array with 10 items and loading false', async() => {
        const { result, waitForNextUpdate }  = renderHook(() => useFetchGifs('Dragon Ball'));
        
        await waitForNextUpdate();

        const { data, loading } = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    
    
})
