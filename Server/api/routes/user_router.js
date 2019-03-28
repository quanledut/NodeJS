const userController = require('../controller/user/user_controller');

const user_router = (router) => {
    router.post('/user/register',userController.register)
}

module.exports = user_router