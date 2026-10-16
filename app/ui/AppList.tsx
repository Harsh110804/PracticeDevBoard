"use Client"

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

type task = {
    id: number,
    title : string,
    status?:string
};

type TaskListProp = {
    title:string,
    tasks: task[],
};

export default function AppTaskList({
    title,
    tasks,
} : TaskListProp) {
    return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold text-gray-900">
        {title}
      </h2>

      <List disablePadding>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            divider
            disableGutters
          >
            <ListItemText
              primary={task.title}
              secondary={task.status}
            />
          </ListItem>
        ))}
      </List>

      {tasks.length === 0 && (
        <p className="py-4 text-sm text-gray-500">
          No tasks available.
        </p>
      )}
    </div>
  );
}