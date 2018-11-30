export default class Beer {
  constructor(newName, newBrand, newPrice, newAlcoholContent) {
    this.name = newName;
    this.brand = newBrand;
    this.price = newPrice;
    this.alcoholContent = newAlcoholContent;
    this.onSale = false;
    this.amount = 124;
  }
}