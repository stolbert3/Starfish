import  React  from 'react';
import "./ParentComponent.css";
import API from '../../utils/API.js';

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        API.getUser('sydney.katurah@gmail.com')
            .then(res => {
                console.log("res", res);
            }) 
        }
    render() {
        
        console.log("test");
      return(

        <div className="container">

        <div className="header">

        <h1> Parent </h1>

        <img src="..." alt="..." className="img-thumbnail" />


<hr/>
        </div>

        

        <div className="Task">
            <input type="checkbox" name="Task1" value="Task1" />
            Task 1
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