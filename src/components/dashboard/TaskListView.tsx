import { userTasksType } from "../../lib/getUserTasks";
import CenteredLoadingBar from "../CenteredLoadingBar";
import { z } from "zod";
import { MdError } from "react-icons/md";

type TaskListViewProp = {
  tasks: userTasksType | null;
};

const TaskDescriptionSchema = z.object({
  tags: z.string().array(),
  description: z.string(),
});

type TaskDescription = z.infer<typeof TaskDescriptionSchema>;

const TaskListView = ({ tasks }: TaskListViewProp) => {
  return (
    <div className="card m-4 max-w-full bg-base-100 shadow-2xl md:max-w-md">
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
                      {taskDescription.tags.map((element, i) => {
                        return (
                          <div className="badge-secondary badge ml-1" key={i}>
                            {element}
                          </div>
                        );
                      })}
                    </div>
                    <div className="collapse-content">
                      <p>Placeholder</p>
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
