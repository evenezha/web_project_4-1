class Section {
 

  constructor({ items, renderer }, container) { 
    this._renderedItems = items; 
    this._renderer = renderer; 
    this._container = container; 
  } 

  addItem(element) { 
    this._container.prepend(element); 
  } 

  renderItems(items) {
    items.forEach(this._renderer);
  }
} 



export default Section;
 
