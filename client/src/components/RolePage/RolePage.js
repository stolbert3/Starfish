import  React  from 'react';
import "./RolePage.css";
class RolesComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("test");
      return(
    <div className="BodyContainer">
        <div className="container" />
            <button><img src="./images/serene_lady.svg" />Parent</button>
            <button><img src="./images/face_neutral_3.svg" />Child</button>
        </div>
     

      );
    }
}
export default RolesComponent;