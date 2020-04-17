import { Router } from 'express';

import AuthentivateUserService from '../services/AuthentivateUserService';

const sessionsRouter = Router();

// POST http://localhost:3333/sessions

sessionsRouter.post('/', async (request, response) => {
    const { email, password } = request.body;

    const authentivateUser = new AuthentivateUserService();

    const { user, token } = await authentivateUser.execute({
        email,
        password,
    });

    delete user.password;

    return response.json({ user, token });
});

export default sessionsRouter;
