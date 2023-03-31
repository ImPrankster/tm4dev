import { MdCheck, MdAdd } from "react-icons/md";

const NewTask = () => {
  return (
    <div className="dropdown-top dropdown-end dropdown fixed bottom-4 right-4">
      <label tabIndex={0} className="btn-circle btn">
        <MdAdd size={10} />
      </label>
      <div className="card-compact card dropdown-content m-4 w-96 bg-base-100 p-4 shadow-xl">
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

export default NewTask;
