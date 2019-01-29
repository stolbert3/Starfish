import  React  from 'react';
import "./ChildComponent.css";
class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("test");
      return(


        <div className="container">

        <div className="header">

        <h1> Child </h1> 

       
        <div className="ScoreCard">
        Starfish Points:<span>0</span>
        </div>
       

        </div>
    
   


           <div className="Task">    
            Task 1
            <img src="" alt="" />
        </div>
        <div className="Task">
            
            Task 2
        </div>

        <div className="Task">
            
            Task 3
        </div>

        <div className="Task">
            
            Task 4
        </div>

        </div>
      );
    }
}
export default ChildComponent;

//Ideas;

// After the login page,make a page where user puts in custom name.