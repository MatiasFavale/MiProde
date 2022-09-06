//Seccion imports
import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import {toast} from "react-toastify";

//Seccion Componente (render)
class CoursesPage extends React.Component {
/*
  state= {
    course:{
      title:""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title:event.target.value};
    this.setState({course});
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
    const course = { ...this.state.course, title:""};
    this.setState({course});
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <h2>courses</h2>
        <h3>Add Course</h3>
        <input 
          type="text" 
          onChange={this.handleChange} 
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
*/
  state = {
    redirectToAddCoursePage:false
  };
  componentDidMount(){
    const {courses, authors, actions} = this.props;
    if(courses.length === 0){
      actions.loadCourses()
      .catch(error =>{
        alert("loading courses failed " + error);
      });
    }
    
    if(authors.length === 0){
      actions.loadAuthors()
      .catch(error =>{
        alert("loading authors failed " + error);
      });
    }    
  }

  handleDeleteCourse = course => {
    toast.success("Course Deleted");
    this.props.actions.deleteCourse(course).catch(error => {
      toast.error("Delete failed. ", error.message, {autoClose: false});
    });
  }

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>courses</h2>
        
        {this.props.loading ? (
          <Spinner/>
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => this.setState({ redirectToAddCoursePage: true })}
            >
              Add Course
            </button>
            <CourseList onDeleteClick={this.handleDeleteCourse} courses={this.props.courses} />
          </>
        )}        
      </>
        
    );
  }
}

//Seccion PropTypes
//this.props
CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

//Seccion Redux
function mapStateToProps(state){
  return {
    courses: 
      state.authors.length === 0 ? [] : state.courses.map(course => {
      return {
        
        ...course,
        authorName: state.authors.find(a => a.id === course.authorId).name
      };
    }),
    authors: state.authors,
    loading:state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch)
    }
      
    //createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

//Seccion Redux Connect
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);