import React, {Component} from "react"

export default class StudentComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            studentId : props.student.studentId,
            studentName: props.student.name,
            studentYear: props.student.year,
        }
    }

    onTextChange = (evt) => {
        let target = evt.target;
        let classList = target.classList;
        let value = target.value;

        if(classList.contains("studentID")){
            this.setState({studentId : value})
        }else if (classList.contains("studentName")) {
            this.setState({ studentName : value })
        }else {
            this.setState({ studentYear : value })
        } 
    }

    saveStudent = (evt) =>{
        let newStudent = this.state;
        alert("New Student Saved " + JSON.stringify(newStudent))
        this.props.addStudent(newStudent)
        evt.preventDefault();
    }




    render(){
        return (
            <>
                <h1> Add New Student Page </h1>
                <section>
                    <div>
                        <div>
                            <b>Student ID</b>
                            <input type="number" className="form-control col-md-6 studentID" value={this.state.studentId}
                                placeholder="Student ID" onChange={this.onTextChange}/>
                        </div>
                        <div>
                            <b>Name of Student</b>
                            <input type="text" className="form-control col-md-6 studentName" value={this.state.studentName}
                                placeholder="Student Name" onChange={this.onTextChange}/>
                        </div>
                        <div>
                            <b>Student Year</b>
                            <input type="text" className="form-control col-md-6 studentYear" value={this.state.studentYear}
                                placeholder="Student Year" onChange={this.onTextChange}/>
                        </div>
                        <input type="button" className="btn btn-primary col-md-2 saveStudent" value={"Save Student"} 
                            onClick={this.saveStudent}/>
                    </div>
                </section>
            </>
        )
    }
}