import { findDuplicateTransactions } from './find-duplicates';
import { Transaction } from './transaction.interface';

test('Find duplicate transactions', () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 2,
      source: 'B',
      target: 'C',
      amount: 1000,
      description: 'rent'
    },
    {
      id: 3,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 4,
      source: 'A',
      target: 'D',
      amount: 100,
      description: 'groceries'
    },
    {
      id: 5,
      source: 'A',
      target: 'C',
      amount: 250,
      description: 'other'
    },
    {
      id: 6,
      source: 'B',
      target: 'C',
      amount: 1000,
      description: 'rent'
    },
  ];
  expect(findDuplicateTransactions(transactions)).toEqual([
    {
      id: 1,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 2,
      source: 'B',
      target: 'C',
      amount: 1000,
      description: 'rent'
    },
    {
      id: 3,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 6,
      source: 'B',
      target: 'C',
      amount: 1000,
      description: 'rent'
    },
  ]);
});
