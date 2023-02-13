class Todo {
    constructor(description) {
        
        this.description = description;
    }
   

    display = () => {

        alert(this.description)
    }
    
}

export default Todo;