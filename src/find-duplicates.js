"use strict";
exports.__esModule = true;
exports.findDuplicateTransactions = void 0;
/**
 * Find duplicate transactions
 * Given a list of transactions, find and return duplicate transactions. There can be more than one duplicate transactions.
 * A transaction can be called duplicate if it has the same `source`, `target`, `amount` and `description`.
 *
 * @param transactions List of transactions
 * @returns {Transaction[]} List of duplicate transactions
 */
function findDuplicateTransactions(transactions) {
    var sortedRecords = transactions.sort(function (a, b) { return Number(a.id) - Number(b.id); });
    return sortedRecords.reduce(function (acc, record) {
        if (filteredRecords(sortedRecords, record).length > 1) {
            acc.push(record);
        }
        return acc;
    }, []);
}
exports.findDuplicateTransactions = findDuplicateTransactions;
/**
 * Filter sorted transactions
 * Given a list of transactions, filter and return duplicate transactions.
 * A transaction can be called duplicate if it has the same `source`, `target`, `amount` and `description`.
 *
 * @param sortedRecords List of sorted transactions
 * @param record current transactions
 * @returns {Transaction[]} List of duplicate transactions
 **/
function filteredRecords(sortedRecords, record) {
    return sortedRecords.filter(function (rec) { return rec.source === record.source && rec.target === record.target && rec.amount === record.amount && rec.description && record.description; });
}
