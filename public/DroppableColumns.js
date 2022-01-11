class DroppableColumns{
    constructor(){
        this.boxes = document.querySelectorAll('[name="container"]')
        this.addListeners();
    }
    
    addListeners = ()=>{
        this.boxes.forEach(box => {
            box.addEventListener('dragenter', this.dragEnter)
            box.addEventListener('dragover', this.dragOver);
            box.addEventListener('dragleave', this.dragLeave);
            box.addEventListener('drop', this.drop);
        });
     }
   

    dragEnter = (e) => {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }

    dragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy"
        e.target.classList.add('drag-over');
    }

    dragLeave=(e)=> {
        e.target.classList.remove('drag-over');
    }

    drop =(e)=> {
        e.preventDefault();
        // e.target.classList.remove('drag-over');
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);

        e.target.appendChild(draggable);
        
        draggable.classList.remove('hide');

        let card = JSON.parse(localStorage[id])
        card.column = e.target.id;
        localStorage[id]=JSON.stringify(card)
        

    }

    
}

export default DroppableColumns;