import express, { Request, Response } from 'express';
import { Pool } from 'pg';

const app = express();
const port = process.env.PORT || 3000;

// Conexión a la base de datos PostgreSQL
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  try {
    app.get('/', (req: Request, res: Response) => {
      res.json({ message: 'No data to show' }); // Mensaje predeterminado en lugar de los datos
    });
  } catch (error) {
    console.error('Failed to fetch books', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on https://mercadocomic-backend.onrender.com`);
});
