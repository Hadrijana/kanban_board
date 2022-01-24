class DropdownButton {
  parent : HTMLElement
  id : string
  constructor(parent: HTMLElement) {
    this.parent = parent
    this.id = parent.id
    this.renderCategoryPicker()
  }
  dropDown = () => {
    (document.getElementById(`${this.id}-drop`)as HTMLElement).classList.toggle('show');
  }

  renderCategoryPicker = () => {
    this.parent.innerHTML = `
        <div class="dropdown">
            <button id="${this.id}-dropdown-btn" class="button" >
             <i class="fas fa-caret-square-down"></i>
            </button>
            <div id="${this.id}-drop" class="dropdown-content">
            </div>
        </div>`;
    (document
      .querySelector(`[id='${this.id}-dropdown-btn']`)as HTMLElement)
      .addEventListener('click', this.dropDown);
  }
}

export default DropdownButton
