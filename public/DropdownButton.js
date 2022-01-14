class DropdownButton {
  constructor(parent) {
    this.parent = parent
    this.id = parent.id
    this.renderCategoryPicker()
  }
  dropDown = () => {
    document.getElementById(`${this.id}-drop`).classList.toggle('show')
  }

  renderCategoryPicker = () => {
    this.parent.innerHTML = `
        <div class="dropdown">
            <button id="${this.id}-dropdown-btn" class="dropbtn">Dropdown</button>
            <div id="${this.id}-drop" class="dropdown-content">
            </div>
        </div>`
    document
      .querySelector(`[id='${this.id}-dropdown-btn']`)
      .addEventListener('click', this.dropDown)
  }
}

export default DropdownButton
