'use strict';

const mysql = require('anytv-node-mysql');
const squel = require('squel').useFlavour('mysql');

exports.get_note = async function (req) {
    let query = squel.select()
        .from('notes');

    if (req.query.id) {
        query.where('note_id = ?', req.query.id);
    }

    const result = await mysql.use('my_db')
        .build(query)
        .promise();

    return result;
};

exports.upsert = async function (req) {
    const query = squel.insert()
        .into('notes')
        .setFields(req.body)
        .onDupUpdate('title = VALUES(title)')
        .onDupUpdate('description = VALUES(description)')
        .onDupUpdate('content = VALUES(content)');

    await mysql.use('my_db')
        .build(query)
        .promise();

    return 'Upsert successfully';
};

exports.remove = async function (req) {
    const query = squel.delete()
        .from('notes')
        .where('note_id = ?', req.params.id);

    await mysql.use('my_db')
        .build(query)
        .promise();

    return 'Remove successfully';
};
