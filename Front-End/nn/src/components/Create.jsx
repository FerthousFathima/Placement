import React, { Component } from 'react';
import CollegeService from '../services/CollegeService';



class Create extends Component {
    constructor(props) {
        super(props) 
        this.state ={
            
            collegeName:"",
            collegeAdmin:"",
            location:""



        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeAdminHandler=this.changeAdminHandler.bind(this);
        this.changelocationHandler=this.changelocationHandler.bind(this);
        this.save=this.save.bind(this);


    
    
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
    save=(e) =>{
        e.preventDefault();
        let colleges = {collegeName:this.state.collegeName,collegeAdmin:this.state.collegeAdmin,location:this.state.location};
        console.log('colleges =>' + JSON.stringify(colleges));
        
            CollegeService.createCollege(colleges).then(res =>{
              window.location.assign("/colleges")


            });
        
  
    }
    
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            
                            <h3 className="text-center">Add College</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>collegeName:</label>
                                        <input placeholder="Enter your name" name="collegeName" className="form-control"
                                           value={this.state.collegeName} onChange={this.changeNameHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>collegeAdmin:</label>
                                        <input placeholder="Enter your name" name="collegeAdmin" className="form-control"
                                           value={this.state.collegeAdmin} onChange={this.changeAdminHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Loction:</label>
                                        <input placeholder="Enter your location" name="Location" className="form-control"
                                           value={this.state.location} onChange={this.changelocationHandler}></input>
                                    </div>
                                    <button className="btn btn-success" onClick={this.save}style={{margin:"10px"}}>save</button>
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

export default Create;