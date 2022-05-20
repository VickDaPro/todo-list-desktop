import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-main">
      <div className="sidebar">
        <div className="sidebar-header">
          <h3 className="sidebar-heading">
            {/* <span className="name-logo">VJ </span> */}
            Vikas Jyani
          </h3>
        </div>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="🔍 search"
          ></input>
        </div>
        <div className="sidebar-body">
          <ul className="sidebar-items">
            <li>
              <h6>
                <span>
                  <i class="fa fa-sun-o" aria-hidden="true"></i>
                </span>{" "}
                My Day
              </h6>
            </li>
            <li>
              <h6>
                <i class="fa fa-star-o" aria-hidden="true"></i> Important
              </h6>
            </li>
            <li>
              <h6>
                <i class="fa fa-calendar-o" aria-hidden="true"></i> Planned
              </h6>
            </li>
            <li>
              <h6>
                <i class="fa fa-globe" aria-hidden="true"></i> All
              </h6>
            </li>
            <li>
              <h6>
                <i class="fa fa-check-circle-o" aria-hidden="true"></i>{" "}
                Completed
              </h6>
            </li>
            <li>
              <h6>
                <i class="fa fa-user-o" aria-hidden="true"></i> Assigned to me
              </h6>
            </li>
            <li>
              <h6>
                <i class="fa fa-tasks" aria-hidden="true"></i> Tasks
              </h6>
            </li>
            <hr />
            <li>
              <h5>
                <i class="fa fa-square-o" aria-hidden="true"></i> Untitled Group
              </h5>
              <li>
                <h6 style={{ marginLeft: "10px" }}>
                  <i class="fa fa-list-ul" aria-hidden="true"></i> Zapier
                </h6>
              </li>
            </li>
          </ul>
        </div>
        <div className="sidebar-footer">
          <div class="task__controls">
            <h6>
              <span>
                <i class="fa fa-plus" aria-hidden="true"></i>
              </span>
              <span>{"  "} New List </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
