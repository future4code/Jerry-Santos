import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect"; 

describe("Quando criar um novo post,", () => {
    it("o novo post é adicionado a página.", () => {
      const { getByText, getByPlaceholderText } = render(<App />);
      
      const input = getByPlaceholderText(/Novo post/i);
      const button = getByText(/Adicionar/i);
    
      fireEvent.change(input, {target:{value: 'teste'}});
      fireEvent.click(button);
      
      expect(getByText('teste')).toBeInTheDocument()
    });

    it("o novo post é adicionado a página.", () => {
        const { getByText, getByPlaceholderText } = render(<App />);
        
        const input = getByPlaceholderText(/Novo post/i);
        const button = getByText(/Adicionar/i);
      
        fireEvent.change(input, {target:{value: 'teste 2'}});
        fireEvent.click(button);
        
        expect(getByText('teste 2')).toBeInTheDocument()
      });
});

describe("Quando pressionar o botão,", () => {
    it("vai curtir o post.", () => {
      const { getByText, getByPlaceholderText } = render(<App />);
      
      const input = getByPlaceholderText(/Novo post/i);
      const button = getByText(/Adicionar/i);
    
      fireEvent.change(input, {target:{value: 'teste'}});
      fireEvent.click(button);
      
      expect(getByText('teste')).toBeInTheDocument()

      fireEvent.click(getByText('Curtir'));
      expect(getByText('Descurtir')).toBeInTheDocument()
    });

    it("vai descurtir o post.", () => {
        const { getByText, getByPlaceholderText } = render(<App />);
        
        const input = getByPlaceholderText(/Novo post/i);
        const button = getByText(/Adicionar/i);
      
        fireEvent.change(input, {target:{value: 'teste'}});
        fireEvent.click(button);
        
        expect(getByText('teste')).toBeInTheDocument()
        
        fireEvent.click(getByText('Curtir'));
        expect(getByText('Descurtir')).toBeInTheDocument()
        fireEvent.click(getByText('Descurtir'));
        expect(getByText('Curtir')).toBeInTheDocument()
      });
});