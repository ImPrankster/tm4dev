import { userTasksType } from "../../lib/getUserTasks";

type TaskListViewProp = {
  tasks: userTasksType;
};

const TaskListView = ({ tasks }: TaskListViewProp) => {
  return (
    <div className="card m-4 max-w-full bg-base-100 p-4 shadow-2xl md:max-w-md">
      <div className="card-content">
        <div className="ml-1 text-lg font-bold">Up coming:</div>
        {tasks.map((element) => {
          return (
            <div className="mt-2 max-w-full rounded-md bg-primary p-1 px-2 text-primary-content">
              <div className="text-md">{element.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskListView;
