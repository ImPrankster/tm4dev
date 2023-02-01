import { MdAdd } from "react-icons/md";

type NewTaskButtonProp = {
  exec: Function;
};

const NewTaskButton = ({ exec }: NewTaskButtonProp) => {
  return (
    <button
      onClick={() => {
        exec();
      }}
      className="btn-primary btn-circle btn fixed right-4 bottom-4 z-30 shadow-lg"
    >
      <MdAdd className="text-2xl text-primary-content" />
    </button>
  );
};

export default NewTaskButton;
