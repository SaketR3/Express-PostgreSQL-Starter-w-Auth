import db from '../../prisma/client.js';

const noteQueries = {
  getAllNotes: async (userId) => {
    return await db.note.findMany({
      where: { userId: userId },
    });
  },

  getNoteById: async (noteId, userId) => {
    return await db.note.findFirst({
      where: { id: parseInt(noteId), userId: userId },
    });
  },

  createNote: async (note) => {
    return await db.note.create({
      data: note,
    });
  },

  updateNoteById: async (noteId, userId, note) => {
    return await db.note.updateMany({
      where: { id: parseInt(noteId), userId: userId },
      data: note,
    });
  },

  deleteNoteById: async (noteId, userId) => {
    return await db.note.deleteMany({
      where: { id: parseInt(noteId), userId: userId },
    });
  }
};

export default noteQueries;