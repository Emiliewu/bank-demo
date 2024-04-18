export class Category {
  static categories = [];
  constructor(name) {
    this.id = Category.categories.length + 1;
    this.name = name;
    Category.categories.push(this);
  }

  getName() {
    return this.name;
  }

  static getCategories() {
    return Category.categories;
  }
}
