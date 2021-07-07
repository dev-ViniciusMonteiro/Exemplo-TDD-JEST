const bcrypt = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("User", () => {
    beforeEach(async() => {
        await truncate();
    });

    it("should encrypt user password", async() => {
        const user = await User.create({
            name: "vinicius",
            email: "vinicius@viniciusmonteirodev.com",
            password: "4566"
        });

        const compareHash = await bcrypt.compare("4566", user.password_hash);
        expect(compareHash).toBe(true);
    });
});