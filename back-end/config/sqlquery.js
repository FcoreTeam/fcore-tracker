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

export const createStatus = `CREATE TABLE IF NOT EXISTS status (
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    translate VARCHAR(255) NOT NULL
);`

export const createOrder = `CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    studio_id BIGINT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    theme VARCHAR(255) NOT NULL,
    price DECIMAL(100,2) NOT NULL,
    conditions TEXT NOT NULL,
    email_user VARCHAR(255) UNIQUE NOT NULL CHECK(email_user ilike '%@%'),
    payment_type VARCHAR(255) NOT NULL,
    status_id INTEGER NOT NULL,
    date TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_studio_order FOREIGN KEY (studio_id) REFERENCES studios(studio_id),
    CONSTRAINT fk_status_order FOREIGN KEY (status_id) REFERENCES status(id),
    CHECK (2400000 > price and price > 199),
    CHECK (payment_type = 'post' OR payment_type = 'stage')
);`

export const createStage = `CREATE TABLE IF NOT EXISTS stage (
    order_id BIGINT NOT NULL,
    number INTEGER NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(100,2) NOT NULL,
    percent DECIMAL(100,2) NOT NULL,
    status BOOLEAN NOT NULL DEFAULT false,
    CHECK (2400000 > price and price > 199),
    CHECK (6 > number and number > 0),
    CONSTRAINT fk_order_stage FOREIGN KEY (order_id) REFERENCES orders(id)
);`


// Insert info
export const insertStudio = `INSERT INTO studios (inn, fname, lname, mname, about, sphere_of_activity, phone, studio_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`
export const insertBank = `INSERT INTO bank (name) VALUES ('Сбер'), ('ВТБ'), ('Альфа-Банк'), ('Т-Банк'), ('Совкомбанк'), ('Райффайзен Банк'), ('Газпромбанк');`
export const insertStatus = `INSERT INTO status (code, translate) VALUES 
('notactive', 'Не активирован'), ('inwork', 'В работе'), 
('check', 'На проверке'), ('waitpaid', 'Ожидает оплаты'),
('arbitrage', 'Арбитраж'), ('cancel', 'Отменен'), ('done', 'Выполнен');`