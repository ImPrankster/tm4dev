import { useEffect, useState } from "react";
import getUserTasks from "../lib/getUserTasks";
import { userTasksType } from "../lib/getUserTasks";
import TaskListView from "../components/dashboard/TaskListView";
import NewTaskButton from "../components/dashboard/NewTaskButton";
import NewTaskScreen from "../components/dashboard/NewTaskScreen";

const Dashboard = () => {
  const [userTasks, setUserTasks] = useState<userTasksType | null>(null);
  const [isSettingTask, setIsSettingTask] = useState(false);

  useEffect(() => {
    let data: userTasksType;
    getUserTasks()
      .then((d) => {
        data = d;
        setUserTasks(data);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <>
      <div className="h-16" />
      <NewTaskButton
        exec={() => {
          setIsSettingTask(!isSettingTask);
        }}
      />
      {!isSettingTask ? <></> : <NewTaskScreen />}

      <TaskListView tasks={userTasks} />
    </>
  );
};

export default Dashboard;
