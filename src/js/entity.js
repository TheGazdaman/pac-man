class Entity {
  constructor (type, x, y, stage) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.stage = stage;
  }

  render () {
    this.entEl = document.createElement('div');
    this.entEl.className = `entity entity--${this.type}`;
    this.entEl.style.left = `${this.x * 85}px`;
    this.entEl.style.top = `${this.y * 85}px`;

  }

  mount(parent) {
    this.render();
    parent.appendChild(this.entEl);
    this.stage.entArr.push(this);
  }

  unmount() {
    this.entEl.parentNode.removeChild(this.entEl);
  }
}