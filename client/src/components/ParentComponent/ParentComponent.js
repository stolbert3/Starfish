import  React  from 'react';
import "./ParentComponent.css";
import { Button, ButtonGroup } from 'reactstrap';
import TaskObject from "../../assets/TaskObject.js"

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
          cSelected: [],
          Tasks: TaskObject.tasks,
          Images: TaskObject.image
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
    

        <div className="Container Parent">

           <div className="header">

                <h1> Parent </h1>

                <img src="..." alt="..." class="img-thumbnail" />


                <hr/>
           </div>


{this.state.Tasks.map((task, index) => {
            let image;
            switch(task.name) {
                case 'Brush Teeth':
                    image = "/images/brush_teeth_,_to.svg"
                    break;
                case 'Brush Hair':
                    image = "images/brush_hair_,_to.svg"
                    break;
                case 'Get Dressed':
                    image = "images/change_clothes_,_to.svg"
                    break;
                case 'Eat Breakfast':
                    image = "images/cornflakes.svg"
                    break;
                case 'Eat Lunch':
                    image = "images/sandwich.svg"
                    break;
                case 'Eat Dinner':
                    image = "images/dinner.svg"
                    break;
                case 'Play Inside':
                    image = "images/play_,_to.svg"
                    break;
                case 'Play Outside':
                    image = "images/swing_,_to.svg"
                    break;
                case 'In-home Therapy':
                    image = "images/speech_language_therapist_1a.svg"
                    break;
                case 'Take Shower':
                    image = "images/shower_1_,_to.svg"
                    break;
                case 'Put on PJs':
                    image = "images/pyjamas.svg"
                    break;
                case 'Go to Bed':
                    image = "images/sleep_male_,_to.svg"
                    break;



                default: 
                    image = "/images/serene_lady.svg"
                    break;
            }
            return(
                <div key={task.name} className="Task">
                   
                    <Button color={task.checked? "success" : "secondary"} onClick={() => this.onCheckboxBtnClick(index)} active={task.checked}> {task.checked ? "✓" : "✕"}</Button>      
                    <h1>{task.name}</h1>
                    <img src={image} />          
                </div>
            )
        })}




   






        <div>
        </div>
        </div>
      );
    }
}
export default ParentComponent;