import { useNavigate, useLocation } from "react-router-dom";
import useScrollInto from "./useScrollInto";

const useWorkNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollInto = useScrollInto();

  const handleWorkNavigate = (sectionId: string, itemLabel: string) => {
    if (location.pathname !== "/" && itemLabel == "Works") {
      navigate("/");
      setTimeout(() => {
        scrollInto(sectionId);
      }, 500);
    } else {
      scrollInto(sectionId);
    }
  };
  return handleWorkNavigate;
};
export default useWorkNavigation;
