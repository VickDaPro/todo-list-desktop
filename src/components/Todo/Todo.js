import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../../config/firebase-config";
import { doc, deleteDoc } from "firebase/firestore";
import { Draggable } from "react-beautiful-dnd";
import "./Todo.css";

export default function Todo({ arr, id }) {
  return (
    <div className="todo">
      <Draggable key={id} draggableId={id}>
        {(provided) => (
          <li
            className="task-list-item"
            key={id}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <label className="task-list-item-label">
              <input type="checkbox" />
              <span>{arr.item.todo}</span>
            </label>
            <span>
              <i
                class="fa fa-trash"
                aria-hidden="true"
                onClick={() => {
                  deleteDoc(doc(db, "todos", arr.id));
                }}
              ></i>{" "}
            </span>
          </li>
        )}
      </Draggable>
    </div>
  );
}
