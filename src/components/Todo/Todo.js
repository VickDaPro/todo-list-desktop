import React from "react";

export default function Todo() {
  return (
    <div>
      <div className="todo">
        <div className="todo-header">
          <h3>Zapier</h3>
        </div>
        <div className="todo-body">
          <div className="todo-item">
            <div className="todo-item-header">
              <div className="todo-item-title">
                <h4>
                  <input type="checkbox" />
                  <span>
                    <a href="#">
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </a>
                  </span>
                </h4>
              </div>
            </div>
            <div className="todo-item-body">
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
            </div>
            <div className="todo-item-footer">
              <div className="todo-item-footer-left">
                <span>
                  <i className="fas fa-clock" />
                </span>
                <span>
                  <i className="fas fa-calendar" />
                </span>
                <span>
                  <i className="fas fa-user" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
