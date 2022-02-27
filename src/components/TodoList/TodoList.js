import React, { useEffect, useState } from "react";
import "./TodoList.css";
import CreateTask from "../../Modals/CreateTask";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const[taskList, setTaskList] = useState([]);

  useEffect(()=>{
      let arr = localStorage.getItem("taskList")
      if(arr){
        let obj = JSON.parse(arr)
        setTaskList(obj)
      }
  },[])

  const saveTask = (taskObj) =>{
    let tempList = taskList;
    tempList.push(taskObj);
    setTaskList(tempList);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setModal(false);
  }

  const toggle = () => {
    setModal(!modal);
  };

  const handleModal = (e) => {
    setModal(true);
  };

  

  return (
    <>
    <Navbar/>
      <div className="header text-center pt:5">
        <h1>Please Post Now</h1>
        <button className="btn btn-primary" onClick={handleModal}>
          Create Your Post
        </button>
      </div>
      <div className="task-container">
          {taskList && taskList.map((obj,index)=> <Card taskObj = {obj} index = {index}key={index}></Card>)}
      </div>
      <CreateTask modal={modal} toggle={toggle} save={saveTask}></CreateTask>
    </>
  );
};

export default TodoList;
