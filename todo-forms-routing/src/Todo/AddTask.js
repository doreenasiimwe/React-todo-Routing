
const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return(
      <>
        {/* Add Task */}
        <div className="row">
          <div className="col">
            <input 
              placeholder="Enter Your Todos"
              value={newTask}
              onChange={ (e) => setNewTask(e.target.value)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button
              onClick={addTask}
              className="btn btn-lg btn-success"
            >Add Todo</button>
          </div>
        </div>
        <br />
      </>
    )
  }
  
  export default AddTaskForm