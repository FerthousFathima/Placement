import React, { Component } from 'react';
import CollegeService from '../services/CollegeService';

class Update extends Component {
    constructor(props) {
           super(props) 
           this.state ={
              id:"",
              collegeName:"",
              collegeAdmin:"",
              location:""
            }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeAdminHandler=this.changeAdminHandler.bind(this);
        this.changelocationHandler=this.changelocationHandler.bind(this);
        this.update=this.update.bind(this);
        
    }
    
    changeidHandler=(event) =>{
        this.setState({id:event.target.value});
    }
    
    changeNameHandler=(event) =>{
        this.setState({collegeName:event.target.value});
    }
    changeAdminHandler=(event) =>{
        this.setState({collegeAdmin:event.target.value});
    }
    changelocationHandler=(event) =>{
        this.setState({location:event.target.value});
    }
    

    update=(e) =>{
        e.preventDefault();
        let colleges = {id:this.state.id,collegeName:this.state.collegeName,collegeAdmin:this.state.collegeAdmin,location:this.state.location};
        console.log('colleges =>' + JSON.stringify(colleges));
        CollegeService.updateCollege(colleges,colleges.id).then(res =>{
            window.location.assign("/colleges");


        });
        
  
    }
    
    
render() {
        return (
            <div>
                <div className="container">
                <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Update College</h3>
                <div className="card-body">
                <form>
                                    <div className="form-group">
                                                            
                                        <input placeholder="ID" name="id" className="form-control"
                                        value={this.state.id} onChange={this.changeidHandler}/>
                                    </div>
                                    <div className="form-group">
                                                            
                                         <input placeholder="collegeName" name="collegeName" className="form-control"
                                         value={this.state.collegeName} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                          
                                           <input placeholder="collegeAdmin" name="collegeAdmin" className="form-control"
                                              value={this.state.collegeAdmin} onChange={this.changeAdminHandler}/>
                                    </div>
                                    <div className="form-group">
                                          
                                            <input placeholder="loction" name="location" className="form-control"
                                               value={this.state.location} onChange={this.changelocationHandler}></input>
                                    </div>
                                    <button className="btn btn-success" onClick={this.update}>save</button>
                                    <a className="btn btn-danger" href ="\colleges">cancel</a>
                                    
                                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}


export default Update;