import Card from "./Card.js";

class AddCardButton {
    constructor(btn) {
        this.addTaskBtn = btn;
        this.addTaskBtn.addEventListener("click", this.addTask);
    }
    addTask = () => {        
        const task = new Card({
            title: "",
            description: "",
            id: Date.now(),
            column: `${this.addTaskBtn.parentNode.parentNode.id}-list`,
            color: "#964f4cff"
        })
        localStorage.setItem(task.id, JSON.stringify(task));
        task.renderCard()  
    };
}
export default AddCardButton;
