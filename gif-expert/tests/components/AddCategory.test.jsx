import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Puebas en addCategory', () => { 
    
    // screen.debug();

   
    test('debe de cambiar la caja de texto', () => {
        render(<AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Hola mundo' } });
        expect(input.value).toBe('Hola mundo');
    })

    test('debe de llamar el submit', () => {
        const onNewCategory = jest.fn();

        const inputValue = 'Hola mundo';
        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const from = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(from);

        expect(input.value).toBe('');

        //toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('no debe de llamar el submit', () => {
        const onNewCategory = jest.fn();

        const inputValue = '';
        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const from = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(from);
    

        expect(input.value).toBe('');

        //toHaveBeenCalled()
        expect(onNewCategory).not.toHaveBeenCalled();
    })

});