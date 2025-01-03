import { Router } from 'express';
import noteControllers from '../controllers/noteController.js';
import authMiddleware from '../middleware/authMiddleware.js';


const router = Router();

router.get('/error', (req, res, next) => {
    next(new Error('This is a test error'));
});

router.use(authMiddleware);

router.get('/notes', noteControllers.fetchAllNotes);
router.get('/notes/:id', noteControllers.fetchNoteById);
router.post('/notes', noteControllers.createNewNote);
router.put('/notes/:id', noteControllers.updateNoteById);
router.delete('/notes/:id', noteControllers.deleteNoteById);

export default router;