interface Payment {
    pay(amount: number): void;
  }
  
  class CashPayment implements Payment {
    pay(amount: number): void {
      console.log(`Paid $${amount} in cash.`);
    }
  }
  
  class CardPayment implements Payment {
    constructor(private cardNumber: string) {}
  
    pay(amount: number): void {
      const maskedCard = this.cardNumber.slice(-4);
      console.log(`Paid $${amount} using credit card ending with ***${maskedCard}.`);
    }
  }

  const payment1: Payment = new CashPayment();
  const payment2: Payment = new CardPayment("9876543210984321");
  payment1.pay(50);
  payment2.pay(200);

  export {};