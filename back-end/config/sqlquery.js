export const createUser = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE NOT NULL CHECK(email ilike '%@%'),
    password_hash VARCHAR(255) NOT NULL,
    isActivatedEmail BOOLEAN NOT NULL DEFAULT false,
    isActivated BOOLEAN NOT NULL DEFAULT false,
    code INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    CHECK (type = 'notregister' OR type = 'self')
    );`

export const createStudio = `CREATE TABLE IF NOT EXISTS studios (
    studio_id SERIAL PRIMARY KEY,
    inn INTEGER,
    fname VARCHAR(255), 
    lname VARCHAR(255),
    mname VARCHAR(255),
    about TEXT,
    sphere_of_activity VARCHAR(255),
    phone VARCHAR(255),
    CONSTRAINT fk_studio FOREIGN KEY (studio_id) REFERENCES users(id)
);`

export const createCardDetails = `CREATE TABLE IF NOT EXISTS card_details (
    id SERIAL PRIMARY KEY,
    card_number INTEGER NOT NULL,
    user_id BIGINT NOT NULL,
    CONSTRAINT fk_user_card FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`

export const createToken = `CREATE TABLE IF NOT EXISTS token (
    user_id BIGINT NOT NULL,
    token VARCHAR(255) NOT NULL,
    CONSTRAINT fk_user_token FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`


// Insert info
export const insertStudio = `INSERT INTO studios (inn, fname, lname, mname, about, sphere_of_activity, phone, studio_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`
