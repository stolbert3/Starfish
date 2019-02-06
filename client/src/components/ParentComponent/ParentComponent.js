import  React  from 'react';
import "./ParentComponent.css";
import API from '../../utils/API.js';
import { Button, ButtonGroup } from 'reactstrap';
import TaskObject from "../../assets/TaskObject.js";
import {Link , NavLink, withRouter} from 'react-router-dom'

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            Tasks: []
        }
        
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);

    }

    componentDidMount() {
        const email = localStorage.getItem("starfish_email");
        this.setState ({email: email})

        API.getUser(email)
        .then(res => {
            console.log("res", res);
            this.setState({
                Tasks:res.data.tasks
            }, ()=> console.log("state.Tasks",this.state.Tasks))
            // if (res.data.tasks.length > 0) {
            //     let tasks = res.data.tasks.slice();
            //     tasks[0].complete = true;
            //     API.updateUser('ahs4448@gmail.com', tasks)
            //     .then(res => console.log('FRONT END UPDATE TEST', res));
            // }
        }) 
   

        // API.updateUser('ahs4448@gmail.com', [])
        //     .then(res => {
        //         console.log('frontend update res', res);
        //     })
    }

    onCheckboxBtnClick (index) {
        let copy = this.state.Tasks.slice();
        copy[index].checked = !copy[index].checked
        this.setState({
            Tasks: copy
        })
      }

      submitChecked = () => {
         const newTaskArray = this.state.Tasks.slice();
         console.log(newTaskArray);

         API.updateUser(this.state.email, newTaskArray)
         .then (res => console.log("Submitted Task Array", res))
      }

    render() {
        const email = this.state.email;
        const childLink = `/child/${email}`
        const progressLink = `/progress/${email}`

        console.log(TaskObject);
      return(
    

        <div className="Container Parent">
       
           <div className="header">
           <div>
              <ul id="nav">
                <li><NavLink to={childLink}>Child</NavLink></li>
                <li><NavLink to="/roles">Home</NavLink></li>
                <li><NavLink to={progressLink}>Progress</NavLink></li>
                
              </ul>
            </div>
           

                <h1> Parent </h1>

                <h1>Points:{this.state.score}</h1>


                <hr/>
           </div>


{this.state.Tasks.map((task, index) => {
            let image;
            switch(task.name) {
                case 'Brush Teeth':
                    image = "/images/brush_teeth_,_to.svg"
                    break;
                case 'Brush Hair':
                    image = "/images/brush_hair_,_to.svg"
                    break;
                case 'Get Dressed':
                    image = "/images/change_clothes_,_to.svg"
                    break;
                case 'Eat Breakfast':
                    image = "/images/cornflakes.svg"
                    break;
                case 'Eat Lunch':
                    image = "/images/sandwich.svg"
                    break;
                case 'Eat Dinner':
                    image = "/images/dinner.svg"
                    break;
                case 'Play Inside':
                    image = "/images/play_,_to.svg"
                    break;
                case 'Play Oustide':
                    image = "/images/swing_,_to.svg"
                    break;
                case 'In-home Therapy':
                    image = "/images/speech_language_therapist_1a.svg"
                    break;
                case 'Take Shower':
                    image = "/images/shower_1_,_to.svg"
                    break;
                case 'Put on PJs':
                    image = "/images/pyjamas.svg"
                    break;
                case 'Go to Bed':
                    image = "/images/sleep_male_,_to.svg"
                    break;

                default: 
                    image = "/images/swing_,_to.svg"
                    break;
            }
            return(
                <div key={task.name} className="Task">
                   
                    <Button color={task.checked? "success" : "secondary"} onClick={() => this.onCheckboxBtnClick(index)} active={task.checked}> {task.checked ? "✓" : "✕"}</Button>      
                    <img src={image} />   
                    <h1>{task.name}</h1>       
                </div>

            )
        })}



<div id="submitChecked" onClick={this.submitChecked}>Submit</div>
   






        <div>
        </div>
        </div>
      );
    }
}
export default ParentComponent;