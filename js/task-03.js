// Write code under this line
class Storage {
  constructor(goods) {
    this.items = goods;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    return this.items.push(item);
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    return this.items;
  }
}

// Storage.prototype.getItems = function () {
//   return goods;
// };

// Storage.prototype.addItem = function (item) {
//   return goods.push(item);
// };

// Storage.prototype.removeItem = function (item) {
//   let index = goods.indexOf(item);
//   if (index > -1) {
//     goods.splice(index, 1);
//   }
//   return goods;
// };

console.log(typeof Storage);
// 'function'

const goods = ["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem("Дроид");
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem("Пролонгер");
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */
