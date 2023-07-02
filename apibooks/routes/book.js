const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

// GET /books?id_book=1
router.get('/', (req, res) => {
  const { id_book } = req.query;
  
  if (id_book) {
    connection.query('SELECT * FROM book WHERE id_book = ?', [id_book], (error, results) => {
      if (error) {
        console.error('Error al obtener los datos del libro: ', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        if (results.length > 0) {
          res.json(results[0]);
        } else {
          res.status(404).json({ error: 'Libro no encontrado' });
        }
      }
    });
  } else {
    connection.query('SELECT * FROM book', [], (error, results) => {
      if (error) {
        console.error('Error al obtener los libros del usuario: ', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        res.status(200).json(results);
      }
    });
  }
});

// POST /books
router.post('/', (req, res) => {
  const { title, type, author, price, photo } = req.body;

  connection.query('INSERT INTO book (title, type, author, price, photo) VALUES (?, ?, ?, ?, ?)',
    [title, type, author, price, photo],
    (error, result) => {
      if (error) {
        console.error('Error al añadir un nuevo libro: ', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        res.status(201).json({ message: 'Libro añadido exitosamente' });
      }
    }
  );
});

// PUT /books
router.put('/', (req, res) => {
  const { id_book } = req.query;
  const { title, type, author, price, photo } = req.body;
  const updateFields = {}; // Objeto para almacenar los campos a actualizar

  if (title) {
    updateFields.title = title;
  }
  if (type) {
    updateFields.type = type;
  }
  if (author) {
    updateFields.author = author;
  }
  if (price) {
    updateFields.price = price;
  }
  if (photo) {
    updateFields.photo = photo;
  }

  connection.query(
    'UPDATE book SET ? WHERE id_book = ?',
    [updateFields, id_book],
    (error, result) => {
      if (error) {
        console.error('Error al actualizar la información del libro: ', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        res.status(200).json({ message: 'Información del libro actualizada exitosamente' });
      }
    }
  );
});

// DELETE /books
router.delete('/', (req, res) => {
  const { id_book } = req.query;

  connection.query('DELETE FROM book WHERE id_book = ?', [id_book], (error, result) => {
    if (error) {
      console.error('Error al eliminar el libro: ', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      res.status(200).json({ message: 'Libro eliminado exitosamente' });
    }
  });
});

module.exports = router;
