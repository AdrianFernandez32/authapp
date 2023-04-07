import { createPool } from 'mysql2/promise';

export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: "SGG400pro!",
        database: 'auth_app',
        connectionLimit: 10
    });
    
    return connection
};