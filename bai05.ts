export {};

class BankAccount {
    constructor(private balance: number = 0) {}
  
    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
      }
    }
  
    withdraw(amount: number): boolean {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew: $${amount}. Remaining balance: $${this.balance}`);
        return true;
      }
      console.log(`Withdraw failed: Insufficient funds or invalid amount.`);
      return false;
    }
  
    getBalance(): number {
      return this.balance;
    }
  }

  const myAccount = new BankAccount(100);
  myAccount.deposit(50);
  myAccount.withdraw(30);