import { useRoutes } from "react-router-dom";
import { Landing } from "../features/landing"

export const AppRoutes = () => {  
    const commonRoutes = [{ path: '/', element: (<Landing />) }];
  
    const element = useRoutes([...commonRoutes]);
  
    return <>{element}</>;
  };