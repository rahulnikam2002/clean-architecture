const userRepository = require("../repositories/userRepository");

const userRegistrationService = async (user) => {
    const checkExistUser = await userRepository.findOneUserByEmail(user.email);

    if (checkExistUser) {
        return {
            msg: "User already exist"
        };
    }

    const saveUser = await userRepository.addUser(user);

    return saveUser;
};

module.exports = {
    userRegistrationService
};
