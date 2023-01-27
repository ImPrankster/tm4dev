import { BarLoader } from "react-spinners";

const CenteredLoadingBar = () => {
  return (
    <div className="flex flex-row items-center justify-center self-stretch justify-self-stretch">
      <BarLoader loading={true} color="#570DF8" />
    </div>
  );
};

export default CenteredLoadingBar;
