import React, { Component } from 'react';



class ParentTaskComponent extends Component {
     constructor(props){
       super(props)
     }

    render(){
        const ParentTasks = {


            
        }

        return(
       
            <div>
                <input type="checkbox" name={this.props.name} value={false} />
                  {this.props.task.name}
                 <img src={this.props.task.image} alt="" />
            </div>
        )
    }
}