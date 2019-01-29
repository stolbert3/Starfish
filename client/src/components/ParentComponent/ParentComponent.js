import  React  from 'react';
import "./ParentComponent.css";
import { Button, ButtonGroup } from 'reactstrap';
import TaskObject from "../../assets/TaskObject.js"

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
          cSelected: [],
          Tasks: TaskObject.tasks
        };

        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    }



    onCheckboxBtnClick (index) {
        let copy = this.state.Tasks.slice();
        copy[index].checked = !copy[index].checked
        this.setState({
            Tasks: copy
        })
      }




    render() {
        console.log(TaskObject);
      return(
    
        <div className="container">

           <div className="header">

                <h1> Parent </h1>

                <img src="..." alt="..." class="img-thumbnail" />


                <hr/>
           </div>

        {this.state.Tasks.map((task, index) => {
            return(
                <div key={task.name} className="Task">
                    <h1>{task.name}</h1>
                    <Button color={task.checked? "success" : "secondary"} onClick={() => this.onCheckboxBtnClick(index)} active={task.checked}> {task.checked ? "✓" : "✕"}</Button>                
                </div>
            )
        })}

        <div className="Task">
        <Button color={this.state.cSelected.includes(1) ? "success" : "secondary"} onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>{this.state.cSelected.includes(1) ? "✓" : "✕"}</Button>
            
        </div>

        <div className="Task">
        <Button color={this.state.cSelected.includes(2) ? "success" : "secondary"} onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>{this.state.cSelected.includes(2) ? "✓" : "Task 2"}</Button>
            
        </div>

        <div className="Task">
        <Button color={this.state.cSelected.includes(3) ? "success" : "secondary"} onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>{this.state.cSelected.includes(3) ? "✓" : "Task 3"}</Button>
            
        </div>

        <div className="Task">
    
        <Button color={this.state.cSelected.includes(4) ? "success" : "secondary"} onClick={() => this.onCheckboxBtnClick(4)} active={this.state.cSelected.includes(4)}>{this.state.cSelected.includes(4) ? "✓" : "Task 4"}</Button>
            
        </div>

        <div>
        </div>
        </div>
      );
    }
}
export default ParentComponent;