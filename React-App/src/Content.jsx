import Contact from "./Contact";
import Home1 from "./Home1";

function Content({pageName}){
    if(pageName=="Home1")
    {
    return(
        <>
        <Home1/>
        </>
    )
}
    if(pageName=="Contact")
    {
    return(
        <>
        <Contact/>
        </>
    )
}
}

export default Content;