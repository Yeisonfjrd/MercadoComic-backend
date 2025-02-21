import { neon } from "@neondatabase/serverless";

export async function getData() {
    const sql = neon(process.env.DATABASE_URL); // Conecta a NeonDB usando la URL de conexión
    const data = await sql`SELECT * FROM posts;`; // Ejecuta una consulta SQL
    return data; // Devuelve los datos
}