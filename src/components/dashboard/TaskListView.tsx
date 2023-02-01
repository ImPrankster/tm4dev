import { userTasksType } from "../../lib/getUserTasks";
import CenteredLoadingBar from "../CenteredLoadingBar";
import { MdError } from "react-icons/md";
import {
  TaskDescriptionSchema,
  TaskDescription,
} from "../../lib/schemas/zodSchemas";

type TaskListViewProp = {
  tasks: userTasksType | null;
};

const TaskListView = ({ tasks }: TaskListViewProp) => {
  return (
    <div className="card m-4 max-w-full bg-base-100 shadow-lg md:max-w-md">
      <div className="card-compact card-body">
        {!tasks ? (
          <CenteredLoadingBar />
        ) : (
          <>
            <div className="ml-1 text-lg font-bold">Up coming:</div>
            {tasks.map((element, i) => {
              try {
                const taskDescription: TaskDescription =
                  TaskDescriptionSchema.parse(element.description);
                return (
                  <div
                    tabIndex={0}
                    key={i}
                    className="collapse-plus rounded-box collapse bg-primary"
                  >
                    <div className="collapse-title flex flex-row items-center text-xl font-medium">
                      <p className="text-primary-content">{element.name}</p>
                      {!taskDescription.tags ? (
                        <></>
                      ) : (
                        taskDescription.tags.map((element, i) => {
                          return (
                            <div className="badge-secondary badge ml-1" key={i}>
                              {element}
                            </div>
                          );
                        })
                      )}
                    </div>
                    <div className="collapse-content">
                      {!taskDescription.description ? (
                        <></>
                      ) : (
                        <p className="text-primary-content">
                          {taskDescription.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              } catch (e) {
                return (
                  <div
                    tabIndex={0}
                    key={i}
                    className="collapse-plus rounded-box collapse bg-primary"
                  >
                    <div className="collapse-title flex flex-row items-center text-xl font-medium">
                      <p className="text-primary-content">{element.name}</p>
                      <div className="badge-error badge ml-1">
                        <MdError />
                        Error
                      </div>
                    </div>
                    <div className="collapse-content">
                      <p className="text-error-content">
                        Unsupported Description content
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default TaskListView;
