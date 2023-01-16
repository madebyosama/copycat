import express from 'express';
import { uploadFile, uploadImage } from '../controllers/userControllers.js';

const router = express.Router();

router.post('/upload', uploadImage, uploadFile);

export default router;
