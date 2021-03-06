export default class Beer {
  constructor(newName, newBrand, newPrice, newAlcoholContent, newOnSale) {
    this.name = newName;
    this.brand = newBrand;
    this.price = newPrice;
    this.alcoholContent = newAlcoholContent;
    this.onSale = newOnSale;
    this.amount = 124;
  }

  editAmount(amount) {
    if (amount < 0) {
      amount = 0;
    }
    this.amount = amount;
  }
}