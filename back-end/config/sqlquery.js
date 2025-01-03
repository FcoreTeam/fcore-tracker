export const createUser = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE NOT NULL CHECK(email ilike '%@%'),
    role VARCHAR(255) NOT NULL DEFAULT 'studio',
    password_hash VARCHAR(255) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    TwoFA BOOLEAN NOT NULL DEFAULT false,
    CHECK (type = 'notregister' OR type = 'self'),
    CHECK (role = 'admin' OR role = 'studio')
    );`

export const createStudio = `CREATE TABLE IF NOT EXISTS studios (
    studio_id SERIAL PRIMARY KEY,
    inn BIGINT,
    fname VARCHAR(255), 
    lname VARCHAR(255),
    mname VARCHAR(255),
    about TEXT,
    sphere_of_activity VARCHAR(255),
    phone VARCHAR(255),
    CONSTRAINT fk_studio FOREIGN KEY (studio_id) REFERENCES users(id)
);`

export const createCardDetails = `CREATE TABLE IF NOT EXISTS card_details (
    card_number BIGINT NOT NULL,
    card_fname VARCHAR(255) NOT NULL,
    card_lname VARCHAR(255) NOT NULL,
    user_id BIGINT NOT NULL,
    bank_id INTEGER NOT NULL,
    CONSTRAINT fk_user_card FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_bank_card FOREIGN KEY (bank_id) REFERENCES bank(id)
);`

export const createBank = `CREATE TABLE IF NOT EXISTS bank (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
)`

export const createToken = `CREATE TABLE IF NOT EXISTS token (
    user_id BIGINT NOT NULL,
    token VARCHAR(255) NOT NULL,
    CONSTRAINT fk_user_token FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`


// Insert info
export const insertStudio = `INSERT INTO studios (inn, fname, lname, mname, about, sphere_of_activity, phone, studio_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`
export const insertBank = `INSERT INTO bank (name) VALUES ('Сбер'), ('ВТБ'), ('Альфа-Банк'), ('Т-Банк'), ('Совкомбанк'), ('Райффайзен Банк'), ('Газпромбанк');`