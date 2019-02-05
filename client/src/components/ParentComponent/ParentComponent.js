import  React  from 'react';
import "./ParentComponent.css";
import API from '../../utils/API.js';

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        API.getUser('ahs4448@gmail.com')
            .then(res => {
                console.log("res", res);
                this.setState({
                    user:res.data
                }, ()=> console.log(this.state.user.tasks))
            }) 

        API.updateUser('ahs4448@gmail.com', [])
            .then(res => {
                console.log('frontend update res', res);
            })
        }
    render() {
        
        console.log("test");
      return(

        <div className="container">

        <div className="header">

        <h1> Parent: {this.state.user.childName} </h1>

        <img src="..." alt="..." className="img-thumbnail" />


<hr/>
        </div>

        

        <div className="Task">
            <input type="checkbox" name="Task1" value="Task1" />
            Task 1: {this.state.user.tasks}
            <img src="" alt="" />
        </div>
        <div className="Task">
            <input type="checkbox" name="Task1" value="Task1" />
            Task 2
        </div>

        <div className="Task">
            <input type="checkbox" name="Task1" value="Task1" />
            Task 3
        </div>

        <div className="Task">
            <input type="checkbox" name="Task1" value="Task1" />
            Task 4
        </div>

        </div>
      );
    }
}
export default ParentComponent;