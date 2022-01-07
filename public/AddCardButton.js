import Card from "./Card.js";

class AddCardButton {
    constructor() {
        this.addTaskBtn = document.getElementById("btn-add-task");
        this.addTaskBtn.addEventListener("click", this.addTask);
    }
    addTask = () => {        
        const task = new Card({
            title: "",
            description: "",
            id: Date.now(),
            column: "to-do-list",
            color: "#964f4cff"
        })
        
        task.renderCard()  
    };
}
export default AddCardButton;
