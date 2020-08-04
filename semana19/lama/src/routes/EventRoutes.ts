import { Router } from 'express';
import { EventController } from '../controller/EventController';

const eventController = new EventController();
export const eventRoutes = Router();

eventRoutes.post("/band/register", eventController.registerBand);
eventRoutes.get("/band/info", eventController.getInfoBand);