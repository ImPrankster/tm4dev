import { MdCheck } from "react-icons/md";

const NewTaskScreen = () => {
  return (
    <div className="fixed top-0 left-0 z-20 flex h-screen w-screen flex-col items-center justify-center bg-base-100 bg-opacity-60 p-4 backdrop-blur-sm">
      <div className="card-compact card w-full bg-base-100 p-4 shadow-xl md:max-w-md">
        <div className="card-body">
          <h2 className="card-title">Set New Task</h2>
          <div className="card-actions">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input-bordered input w-full"
              />
              <label className="label ">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                className="input-bordered input w-full"
              />
              <label className="label">
                <span className="label-text">Tags</span>
              </label>
              <input
                type="text"
                placeholder="Tags"
                className="input-bordered input w-full"
              />
              <button className="btn-primary btn mt-8 self-end justify-self-end">
                <MdCheck className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTaskScreen;
