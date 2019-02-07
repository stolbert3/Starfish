import  React  from 'react';
import "../ChildComponent/ChildComponent.css";
import TaskObject from "../../assets/TaskObject.js";
import {Link , NavLink, withRouter} from 'react-router-dom'
import API from "../../utils/API.js"

class ChildProgressView extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
          cSelected: [],
          Tasks: TaskObject.tasks, 
          score: 0
        };

        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    }

componentDidMount(){
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
    this.ScoreCount()
}

    onCheckboxBtnClick (index) {
        let copy = this.state.Tasks.slice();
        copy[index].checked = !copy[index].checked
        this.setState({
            Tasks: copy
        })
      }

      ScoreCount(){
        let Score = 0;
        for(let i = 0; i < this.state.Tasks.length; i++){
            if (this.state.Tasks[i].complete === true) {
                Score++;
            }
        }

        this.setState({
            score : Score
        })

    }


      handleCompletedTask(index){
        let copy = this.state.Tasks.slice();
        console.log('task', copy[index])
        copy[index].complete = true;
        this.setState({
            Tasks: copy
        }, this.ScoreCount)
      }


    render() {
        console.log(TaskObject);
      return(
    

        <div className="Container Parent">

           <div className="header">

           <div>
              <ul id="nav">
                <li><NavLink to="/child">Child</NavLink></li>
                <li><NavLink to="/parent">Parent</NavLink></li>
                <li><NavLink to="/roles">Home</NavLink></li>
              </ul>
            </div>




                <h1> Child Progress</h1>


                {/* <img src="..." alt="..." class="img-thumbnail" /> */}
                <h1>Points:{this.state.score}</h1>

                <hr/>
           </div>


<h1>Incomplete Tasks</h1>

{this.state.Tasks.filter(task =>(!task.complete) ).map((task, index) => {
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
                case 'Play Outside':
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
                    image = "/images/serene_lady.svg"
                    break;
            }

            const visible = task.complete ? 'none' : '';
            
            return(

                <div key={task.name} style = {{display: visible}} className="Task">
                   
                         
                    <img src={image} />   
                    <h1>{task.name}</h1>       
                </div>
            )
        })}

        <h1>Complete Tasks</h1>

        {this.state.Tasks.filter(task =>task.complete ).map((task, index) => {
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
                case 'Play Outside':
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
                    image = "/images/serene_lady.svg"
                    break;
            }

            
            
            return(

                <div key={task.name} className="Task">
                   
                         
                    <img src={image} />   
                    <h1>{task.name}</h1>       
                </div>
            )
        })}

        <div>
        </div>
        </div>
      );
    }
}

export default ChildProgressView


//Ideas;

// After the login page,make a page where user puts in custom name.