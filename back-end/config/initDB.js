import { createBank, createCardDetails, createStudio, createToken, createUser, insertBank } from './sqlquery.js';

export function initDB(client) {
    client.query(createUser);
    client.query(createStudio);
    client.query(createToken);
    client.query(createBank);
    client.query(createCardDetails);

    const info = client.query('select * from bank').then((res) => {
        if (res.rows.length === 0) {
            client.query(insertBank);
        }
    })
    
}