// src/index.js
const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 3000;  // Puerto predeterminado de Strapi

// Conexión a la base de datos PostgreSQL
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM books_to_read;');
    res.json(rows);
  } catch (error) {
    console.error('Failed to fetch books', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on https://mercadocomic-backend.onrender.com`);
});