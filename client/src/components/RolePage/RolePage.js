import  React  from 'react';
import "./RolePage.css";


class RolesComponent extends React.Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        const email = localStorage.getItem("starfish_email");
        console.log(email);
      return(
    <div className="BodyContainer">
        <div className="container" />
            
            <button className="role" onClick={() => { window.location.pathname = '/parent/' + email }}><img src="../../../images/serene_lady.svg" />Parent</button>
            <button className="role" onClick={() => { window.location.pathname = '/child/' + email }}><img src="../../../images/face_neutral_3.svg" />Child</button>
            
        </div>
        
     

      );
    }
}
export default RolesComponent;