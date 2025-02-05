// https://leetcode.com/problems/simple-bank-system

// my solution
// time: O(1) for all operation, space: O(n)

package main

type Bank struct {
	AccountsBalances []int64
}

// return a Bank struct
func Constructor(balance []int64) Bank {
	return Bank{
		AccountsBalances: balance,
	}
}

func (b *Bank) Transfer(account1 int, account2 int, money int64) bool {
	acc1Bal, ok1 := b.getBalance(account1)
	_, ok2 := b.getBalance(account2)

	// check both accounts and balance are valid
	if !ok1 || !ok2 || acc1Bal < money {
		return false
	}

	// transfer
	b.AccountsBalances[account1-1] -= money
	b.AccountsBalances[account2-1] += money

	return true
}

func (b *Bank) Deposit(account int, money int64) bool {
	// check account and balance
	if _, ok := b.getBalance(account); !ok {
		return false
	}

	// deposit
	b.AccountsBalances[account-1] += money

	return true
}

func (b *Bank) Withdraw(account int, money int64) bool {
	// check account and balance
	balance, ok := b.getBalance(account)

	if !ok || balance < money {
		return false
	}

	// withdraw
	b.AccountsBalances[account-1] -= money

	return true
}

// helper method, check account exists and return the balance
func (b *Bank) getBalance(account int) (int64, bool) {
	if account > len(b.AccountsBalances) {
		return 0, false
	}
	return b.AccountsBalances[account-1], true
}
