import React from "react";
import "./Todo.css";

export default function Todo() {
  return (
    <div className="todo">
      <div className="todo-header">
        <h3>Zapier</h3>
        <button className="btn-user todo-header-btn">
          <i class="fa fa-user-plus" aria-hidden="true"></i>
        </button>
        <button className="btn-menu todo-header-btn">
          <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </button>
      </div>
      <div className="todo-body">
        <div className="todo-item">
          {/* <div className="todo-item-body">
              <p>
                <a href="#">
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                </a>
              </p>
            </div> */}
        </div>
      </div>
      <div className="todo-footer">
        <button className="todo-button">
          <span>
            <i class="fa fa-plus" aria-hidden="true"></i>
          </span>{" "}
          Add a task
        </button>
      </div>
    </div>
  );
}
