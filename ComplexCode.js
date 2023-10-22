/*
   Filename: ComplexCode.js
   
   Description: This code demonstrates a complex and sophisticated JavaScript program.
   It simulates a bank account system with multiple functionalities such as account creation,
   balance inquiry, deposit, withdrawal, and transaction history. The program uses various
   object-oriented programming concepts and makes use of modularization and separation of concerns.
   It also includes error handling and data validation to ensure the reliability and security of
   the bank account system.

   Author: AI Assistant
*/

// Object representing a bank account
class BankAccount {
  constructor(accountNumber, accountHolder) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = 0;
    this.transactionHistory = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      console.error("Please enter a valid amount to deposit.");
      return;
    }

    this.balance += amount;
    this.transactionHistory.push({
      type: "Deposit",
      amount: amount,
      balance: this.balance,
      timestamp: new Date().toLocaleString(),
    });

    console.log(`Deposited $${amount} into account ${this.accountNumber}.`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.error("Please enter a valid amount to withdraw.");
      return;
    }

    if (this.balance < amount) {
      console.error("Insufficient funds.");
      return;
    }

    this.balance -= amount;
    this.transactionHistory.push({
      type: "Withdrawal",
      amount: amount,
      balance: this.balance,
      timestamp: new Date().toLocaleString(),
    });

    console.log(`Withdrawn $${amount} from account ${this.accountNumber}.`);
  }

  getBalance() {
    console.log(
      `Account Number: ${this.accountNumber}\nAccount Holder: ${
        this.accountHolder
      }\nBalance: $${this.balance}`
    );
  }

  getTransactionHistory() {
    console.log(`Transaction History for Account ${this.accountNumber}:`);
    this.transactionHistory.forEach((transaction, index) => {
      console.log(
        `${index + 1}. ${transaction.timestamp} - ${transaction.type}: $${
          transaction.amount
        }, Balance: $${transaction.balance}`
      );
    });
  }
}

// Function to create a new bank account
function createBankAccount() {
  const accountNumber = Math.floor(Math.random() * 100000000);
  const accountHolder = prompt("Enter the account holder's name:");

  const newAccount = new BankAccount(accountNumber, accountHolder);
  console.log(
    `New account created with Account Number ${newAccount.accountNumber}.`
  );

  return newAccount;
}

// Example usage
const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.deposit(1000);
account.getBalance();
account.getTransactionHistory();