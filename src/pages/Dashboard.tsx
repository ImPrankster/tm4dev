import { useEffect, useState } from "react";
import getUserTasks from "../lib/getUserTasks";
import { userTasksType } from "../lib/getUserTasks";
import TaskListView from "../components/dashboard/TaskListView";
import NewTask from "../components/dashboard/NewTask";

const Dashboard = () => {
  const [userTasks, setUserTasks] = useState<userTasksType | null>(null);

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
      <NewTask />
      <TaskListView tasks={userTasks} />
    </>
  );
};

export default Dashboard;
