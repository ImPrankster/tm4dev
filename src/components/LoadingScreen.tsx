import { BarLoader } from "react-spinners";

const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-base-100 bg-opacity-60 backdrop-blur-md">
      <BarLoader loading={true} color="#570DF8" />
    </div>
  );
};

export default LoadingScreen;
