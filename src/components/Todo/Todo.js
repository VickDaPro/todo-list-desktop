import React from "react";
import "./Todo.css";

export default function Todo() {
  return (
    <div className="todo">
      <div className="todo-header">
        <h3 className="todo-title">Zapier</h3>
        <button className="btn-user todo-header-btn">
          <i class="fa fa-user-plus" aria-hidden="true"></i>
        </button>
        <button className="btn-menu todo-header-btn">
          <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </button>
      </div>
      <div className="todo-body">
        <div className="todo-item">
          <ul className="task-list">
            <li className="task-list-item">
              <label className="task-list-item-label">
                <input type="checkbox" />
                <span>Buy groceries</span>
              </label>
              <span>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </span>
            </li>
          </ul>
          <ul className="task-list">
            <li className="task-list-item">
              <label className="task-list-item-label">
                <input type="checkbox" />
                <span>Work on DSA</span>
              </label>
              <span>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </span>
            </li>
          </ul>
          <ul className="task-list">
            <li className="task-list-item">
              <label className="task-list-item-label">
                <input type="checkbox" />
                <span>Wrap the task by 6pm today.</span>
              </label>
              <span>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </span>
            </li>
          </ul>
          <ul className="task-list">
            <li className="task-list-item">
              <label className="task-list-item-label">
                <input type="checkbox" />
                <span>Work on sidebar styling</span>
              </label>
              <span>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </span>
            </li>
          </ul>
          <ul className="task-list">
            <li className="task-list-item">
              <label className="task-list-item-label">
                <input type="checkbox" />
                <span>Have lunch at 2pm</span>
              </label>
              <span>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </span>
            </li>
          </ul>
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
