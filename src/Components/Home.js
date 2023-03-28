import React from "react";
//import { user } from "../services/context";
import Sidebar from "./Sidebar";
import "../styles/Home.css";
import user from "./images/user.jpg";
import { userStore } from "../services/firebase";
import { getDocs } from "firebase/firestore";

export default function Home() {
  const allProjects = getDocs(userStore);

  console.log(allProjects);

  return (
    <div className="home-container">
      <Sidebar />
      <div className="home-main">
        <h1>More Details</h1>
        <div className="dashboard"></div>
        <div className="home-btn">
          <button>Back</button>
          <button>Done</button>
        </div>
      </div>
      <div className="home-user">
        <h1>Welcome Back!</h1>
        <img src={user} alt="" />
        <p>Lara Shakespear</p>
        <div className="home-cards">
          <div className="project-count home-card">
            <h3>Project Count</h3>
            <div className="counts">
              <div className="count">
                <p>Total</p>
                <h4 className="total">224</h4>
              </div>
              <div className="count">
                <p>Completed</p>
                <h4 className="complete">152</h4>
              </div>
              <div className="count">
                <p>In Progress</p>
                <h4 className="progress">60</h4>
              </div>
              <div className="count">
                <p>Overdue</p>
                <h4 className="overdue">12</h4>
              </div>
            </div>
          </div>
          <div className="home-card activities">
            <h3>Recent Activity</h3>
            <div className="activity">
              <h3>Hypothesis</h3>
              <div className="checkbox">
                <div className="progcheck"></div>
                <div className="completecheck"></div>
              </div>
              <p>12-05</p>
            </div>
            <div className="activity">
              <h3>Hypothesis</h3>
              <div className="checkbox">
                <div className="progcheck"></div>
                <div className="completecheck"></div>
              </div>
              <p>12-05</p>
            </div>
            <div className="activity">
              <h3>Hypothesis</h3>
              <div className="checkbox">
                <div className="progcheck"></div>
                <div className="completecheck"></div>
              </div>
              <p>12-05</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
