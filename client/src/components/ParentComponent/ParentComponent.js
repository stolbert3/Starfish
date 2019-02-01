import  React  from 'react';
import "./ParentComponent.css";

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
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