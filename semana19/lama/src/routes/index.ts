import { Router } from 'express'
import { userRoutes } from './UserRoutes';
import { eventRoutes } from './EventRoutes';
// import { postRouter } from './PostRouter';


export const routes = Router();

routes.use("/user", userRoutes);
routes.use("/event", eventRoutes);
