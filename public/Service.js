class Service{
    static getAll = async ()=>{
        let allTasks = await fetch('http://localhost:8000/tasks').then(
            res=>{  
                return res.json()
        })
        return allTasks
    }

    

}
export default Service