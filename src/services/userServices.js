const userRepository = require("../repositories/userRepository");

const repository = new userRepository();

class UserSerive {
    async registration(user) {
        try {
            const checkExistUser = await repository.findOneUserByEmail(user.email);

            if (checkExistUser) {
                return {
                    msg: "User already exist"
                };
            }

            const saveUser = await repository.addUser(user);

            return saveUser;
        } catch (error) {
            return error;
        }
    }
}

module.exports = UserSerive;

// const userRegistrationService = async (user) => {
//     const checkExistUser = await repository.findOneUserByEmail(user.email);

//     if (checkExistUser) {
//         return {
//             msg: "User already exist"
//         };
//     }

//     const saveUser = await repository.addUser(user);

//     return saveUser;
// };

// module.exports = {
//     userRegistrationService
// };
