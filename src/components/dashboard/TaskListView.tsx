import { userTasksType } from "../../lib/getUserTasks";
import CenteredLoadingBar from "../CenteredLoadingBar";

type TaskListViewProp = {
  tasks: userTasksType | null;
};

const TaskListView = ({ tasks }: TaskListViewProp) => {
  return (
    <div className="card m-4 max-w-full bg-base-100 shadow-2xl md:max-w-md">
      <div className="card-compact card-body">
        {!tasks ? (
          <CenteredLoadingBar />
        ) : (
          <>
            <div className="ml-1 text-lg font-bold">Up coming:</div>
            {tasks.map((element) => {
              return (
                <div
                  tabIndex={0}
                  className="collapse-plus rounded-box collapse bg-primary"
                >
                  <div className="collapse-title flex flex-row items-center text-xl font-medium">
                    <p className="text-primary-content">{element.name}</p>
                    <div className="badge-secondary badge">primary</div>
                  </div>
                  <div className="collapse-content">
                    <p>
                      tabIndex={0} attribute is necessary to make the div
                      focusable
                    </p>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default TaskListView;
