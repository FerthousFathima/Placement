import React, { Component } from 'react';
import CollegeService from '../services/CollegeService';

class ListcollegeComponents extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colleges:[]

        }
        this.addcolleges = this.addcolleges.bind(this);
        this.editCollege = this.editCollege.bind(this);
        this.deleteCollege = this.deleteCollege.bind(this);
    }
    
    
    deleteCollege(id){
        CollegeService.deleteCollege(id).then(res=>{
            this.setState({colleges:this.state.colleges.filter(colleges=>this.deleteCollege.id !==id)});
            window.location.assign("/colleges")

        });

    }
    
    editCollege(id) {
        window.location.assign("/update-colleges/");

    }

    componentDidMount(){
        CollegeService.getColleges().then((res)=> {
            this.setState({colleges: res.data});
        });
    }

    addcolleges(){
        window.location.assign('/add-college/')
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">colleges</h2>
                <div className="row">
                
                
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> college id </th>
                                <th> Admin </th>
                                <th> Name </th>
                                <th> Location </th>
                                <th style={{width:"250px"}}> Actions </th>

                             
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.colleges.map(
                                    colleges =>
                                    <tr key ={colleges.id}>
                                        <td> {colleges.id}</td>
                                        <td> {colleges.collegeAdmin}</td>
                                        <td> {colleges.collegeName}</td>
                                        <td> {colleges.location}</td>
                                        <td>
                                            <button  onClick ={() =>this.editCollege(colleges.id)} className ="btn btn-info" style={{margin:"10px",backgroundcolor:"green"}}>Update</button>
                                            <button  onClick ={() =>this.deleteCollege(colleges.id)}className ="btn btn-danger"  style={{margin:"10px"}}>Delete</button>
                                            

                                        </td>

                                    </tr>

                                )
                            }
                        </tbody>

                    </table>

                </div>
                
            </div>
        );
    }
}

export default ListcollegeComponents;