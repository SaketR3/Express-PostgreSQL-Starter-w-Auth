import db from '../../prisma/client.js';

const noteQueries = {
  getAllNotes: async () => {
    return await db.note.findMany();
  },

  getNoteById: async (id) => {
    return await db.note.findUnique({
      where: { id: parseInt(id) },
    });
  },

  createNote: async (note) => {
    return await db.note.create({
      data: note,
    });
  },

  updateNoteById: async (id, note) => {
    return await db.note.update({
      where: { id: parseInt(id) },
      data: note,
    });
  },

  deleteNoteById: async (id) => {
    return await db.note.delete({
      where: { id: parseInt(id) },
    });
  }
};

export default noteQueries;