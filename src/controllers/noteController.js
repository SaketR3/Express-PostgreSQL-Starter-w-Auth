import noteQueries from '../models/noteModel.js';

const noteControllers = {
  fetchAllNotes: async (req, res) => {
    const notes = await noteQueries.getAllNotes(req.user.userId);
    res.status(200).json(notes);
  },

  fetchNoteById: async (req, res) => {
    const note = await noteQueries.getNoteById(req.params.id, req.user.userId);

    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  },

  createNewNote: async (req, res) => {
    const noteData = {
      ...req.body,
      user: {
        connect: {
          id: req.user.userId
        }
      }
    };

    const note = await noteQueries.createNote(noteData);
    res.status(201).json(note);
  },

  updateNoteById: async (req, res) => {
    const note = await noteQueries.updateNoteById(req.params.id, req.user.userId, req.body);

    if (note.count === 0) {
      return res.status(404).json({ message: 'Note not found or no permission to update' });
    }

    res.status(200).json(note);
  },

  deleteNoteById: async (req, res) => {
    const result = await noteQueries.deleteNoteById(req.params.id, req.user.userId);

    if (result.count === 0) {
      return res.status(404).json({ message: 'Note not found or no permission to delete' });
    }

    res.status(204).end();
  }
};

export default noteControllers;