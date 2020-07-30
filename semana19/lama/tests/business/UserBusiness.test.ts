import { UserBusiness } from "../../src/business/UserBusiness";
import { UserRole } from "../../src/model/User";

describe("UserBusiness", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};

  test("Falha no signup com 'name' vazio", async () => {
    expect.assertions(1);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.signup("", "pereira@lama.com", "123456", UserRole.ADMIN);
    } catch (err) {
      expect(err.message).toBe("Please fill all the fields");
    }
  });

  test("Falha no signup com 'email' vazio", async () => {
    expect.assertions(1);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.signup("Pereira", "", "123456", UserRole.ADMIN);
    } catch (err) {
      expect(err.message).toBe("Please fill all the fields");
    }
  });


});
