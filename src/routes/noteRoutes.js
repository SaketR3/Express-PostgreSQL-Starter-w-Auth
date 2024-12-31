import { Router } from 'express';
import noteControllers from '../controllers/noteController.js';

const router = Router();

router.get('/error', (req, res, next) => {
    next(new Error('This is a test error'));
});

router.get('/notes', noteControllers.fetchAllNotes);
router.get('/notes/:id', noteControllers.fetchNoteById);
router.post('/notes', noteControllers.createNewNote);
router.put('/notes/:id', noteControllers.updateNoteById);
router.delete('/notes/:id', noteControllers.deleteNoteById);

export default router;