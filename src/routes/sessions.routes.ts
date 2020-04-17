import { Router } from 'express';

import AuthentivateUserService from '../services/AuthentivateUserService';

const sessionsRouter = Router();

// POST http://localhost:3333/sessions

sessionsRouter.post('/', async (request, response) => {
    try {
        const { email, password } = request.body;

        const authentivateUser = new AuthentivateUserService();

        const { user, token } = await authentivateUser.execute({
            email,
            password,
        });

        delete user.password;

        return response.json({ user, token });
    } catch (err) {
        return response.status(err.statusCode).json({ error: err.message });
    }
});

export default sessionsRouter;
