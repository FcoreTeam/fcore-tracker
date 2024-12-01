import { createCardDetails, createStudio, createToken, createUser } from './sqlquery.js';

export function initDB(client) {
    client.query(createUser);
    client.query(createStudio);
    client.query(createToken);
    client.query(createCardDetails)
}