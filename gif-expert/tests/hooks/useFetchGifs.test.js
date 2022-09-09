import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe('Pruebas hooks', () => { 
    
    test('Debe de retornar el estado inicial', async() => {
        
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, loading } = result.current;


        expect( images ).toEqual([]);
        expect( loading ).toBe(true);
    })

    test('Debe de retornar un arreglo de imagenes y el loading en false', async() => {
        
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        
        await waitFor(
            () => expect( result.current.images.length ).toBe(10)
        )

        const { images, loading } = result.current;

        expect( images.length ).toBe(10);
        expect( loading ).toBe(false);
    })
    
});