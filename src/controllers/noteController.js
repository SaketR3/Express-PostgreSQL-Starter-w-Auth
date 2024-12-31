import noteQueries from '../models/noteModel.js';

const noteControllers = {
  fetchAllNotes: async (req, res) => {
    const notes = await noteQueries.getAllNotes();
    res.status(200).json(notes);
  },

  fetchNoteById: async (req, res) => {
    const note = await noteQueries.getNoteById(req.params.id);
    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  },

  createNewNote: async (req, res) => {
    const note = await noteQueries.createNote(req.body);
    res.status(201).json(note);
  },

  updateNoteById: async (req, res) => {
    const note = await noteQueries.updateNoteById(req.params.id, req.body);
    res.status(200).json(note);
  },

  deleteNoteById: async (req, res) => {
    await noteQueries.deleteNoteById(req.params.id);
    res.status(204).end();
  }
};

export default noteControllers;