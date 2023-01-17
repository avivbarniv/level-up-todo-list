import { Router } from 'express';
import task from './task';

const router = Router();

router.use('/tasks', task);

export default router;
