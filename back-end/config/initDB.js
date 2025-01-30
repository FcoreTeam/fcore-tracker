import { createBank, createCardDetails, createOrder, createStage, createStatus, createStudio, createToken, createUser, insertBank, insertStatus } from './sqlquery.js';

export function initDB(client) {
    client.query(createUser);
    client.query(createStudio);
    client.query(createToken);
    client.query(createBank);
    client.query(createCardDetails);
    client.query(createStatus);
    client.query(createOrder);
    client.query(createStage);

    client.query('select * from bank').then((res) => {
        if (res.rows.length === 0) {
            client.query(insertBank);
        }
    })

    client.query('select * from status').then((res) => {
        if (res.rows.length === 0) {
            client.query(insertStatus);
        }
    })
}