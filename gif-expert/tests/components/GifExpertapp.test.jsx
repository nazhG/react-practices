import { GifExpertapp } from "../../src/components/GifExpertapp";
import { reder } from "@testing-library/react";

describe("Pruebas en <GifExpertapp />", () => {
    test("Debe de mostrarse correctamente", () => {
        const wrapper = render(<GifExpertapp />);
        expect(wrapper).toMatchSnapshot();
    });

});