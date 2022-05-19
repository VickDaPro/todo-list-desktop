import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-main">
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Vikas J</h3>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="search" />
        </div>
        <div className="sidebar-body">
          <ul>
            <li>
              <a href="#">My Day</a>
            </li>
            <li>
              <a href="#">Important</a>
            </li>
            <li>
              <a href="#">Planned</a>
            </li>
            <li>
              <a href="#">All</a>
            </li>
            <li>
              <a href="#">Completed</a>
            </li>
            <li>
              <a href="#">Assigned to me</a>
            </li>
            <li>
              <a href="#">Tasks</a>
            </li>
            <hr />
            <li>
              <a href="#">Untitled Group</a>
              <li>
                <a href="#">Zapier</a>
              </li>
            </li>
          </ul>
        </div>
        <div className="sidebar-footer">
          <div class="task__controls">
            <a href="#" type="button" id="addtaskbtn">
              <span>
                <i class="fa fa-plus" aria-hidden="true"></i>
              </span>
              <span>New List</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
