export default class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  };

  renderElements(items) {
    items.forEach(item => this._renderer(item));
  }

	addItem(item, order = true) {
    if(order) {
      this._containerSelector.append(item);
    } else {
      this._containerSelector.prepend(item);
    }
	};
}
