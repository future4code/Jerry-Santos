describe("Showing jest.fn", () => {
    test("Mock de sucesso da função", () => {
        const validatorMock = jest.fn(() => {
            return true;
        })
    })

    test("Mock de falha da função", () => {
        const validatorMock = jest.fn(() => {
            return false;
        })
    })
})