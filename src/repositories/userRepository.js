/**
 * USER related jitne bhi db opt
 */

const userSchema = require("../Models/userSchemas/userSchema");

class UserRepository {
    async addUser(user) {
        const response = await userSchema.create(user);
        return response;
    }

    async findOneUserByEmail(email) {
        const response = await userSchema.findOne({ email });
        return response;
    }
}

module.exports = UserRepository;

// const addUser = async (user) => {
//     const response = await userSchema.create(user);
//     return response;
// };

// const findOneUserByEmail = async (email) => {
//     const response = await userSchema.findOne({ email });
//     return response;
// };

// module.exports = {
//     addUser,
//     findOneUserByEmail
// };
