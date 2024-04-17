import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Skyblue from "./Skyblue";
import Silver from "./Silver";
import Pink from "./Pink";
import Lightgreen from "./Lightgreen";
import Spacegrey from "./Spacegrey";

const Router=createBrowserRouter([{
    path:"/skyblue",
    element:<Skyblue/>
},{
    path:"/",
    element:<App/>
},
{
    path:"/silver",
    element:<Silver/>
},
{
    path:"/pink",
    element:<Pink/>
},
{
    path:"/lightgreen",
    element:<Lightgreen/>
},
{
    path:"/spacegrey",
    element:<Spacegrey/>
}
])
export default Router;