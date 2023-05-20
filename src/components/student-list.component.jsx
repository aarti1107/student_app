import React from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.css"
export default class StudentList extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            students: []
        }
    }

    showItems(){
        axios.get('http://localhost:3001/students')
        .then(res=>{
            this.setState({students:res.data})
        })
    }

    delStud(id){
        axios.delete('http://localhost:3001/students/'+id)
        this.showItems()
    }

    componentDidMount(){
        this.showItems()
    }

    render(){
        return( 
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>E-mail</th> 
                        <th>Actions</th>                      
                    </tr>
                </thead>
                <tbody>
                                        
                    {this.state.students.map((student) => 
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>
                            <td><button className='btn btn-info'>Info</button></td>
                            <td><button className='btn btn-warning'>Edit</button></td>
                            <td><button className='btn btn-danger' onClick={()=>this.delStud(student.id)}>Delete</button></td>
                            </td>
                        </tr>
                    )}

                </tbody>


            </table>
        )
    }
} 