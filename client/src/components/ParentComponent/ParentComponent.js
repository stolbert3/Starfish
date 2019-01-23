import  React  from 'react';

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return(

        <div class="container">
        <h1> Name </h1>

        <img src="..." alt="..." class="img-thumbnail" />

        <hr />

        <div>
            <input type="checkbox" name="Task1" value="Task1" />
            Task 1
            <img src="" alt="" />
        </div>
        <div>
            <input type="checkbox" name="Task1" value="Task1" />
            Task 2
        </div>

        <div>
            <input type="checkbox" name="Task1" value="Task1" />
            Task 3
        </div>

        <div>
            <input type="checkbox" name="Task1" value="Task1" />
            Task 4
        </div>
        </div>
      );
    }
}


export default ParentComponent;