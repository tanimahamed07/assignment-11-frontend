import Button from "../components/Shared/Button/Button";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white ">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <iframe className="h-[450px]" src="https://lottie.host/embed/8d6d3288-9e18-475d-937e-28052f6849b1/NKFieLAvPB.lottie"></iframe>

          <Button label={"Take Me Home"} onClick={() => navigate("/")} />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
