export {};

class Account {
    public accountNumber: string;
    private secretPin: string;  
    readonly createdAt: Date;    
  
    constructor(accountNumber: string, secretPin: string) {
      this.accountNumber = accountNumber;
      this.secretPin = secretPin;
      this.createdAt = new Date();
    }
  
    verifyPin(pin: string): boolean {
      return this.secretPin === pin;
    }
  }

  const acc = new Account("ACC123456", "9999");
  console.log(acc.accountNumber);
  console.log(acc.createdAt);