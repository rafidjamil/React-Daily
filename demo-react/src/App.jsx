import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Productinfo from "./components/Productinfo";
import Productlis from "./components/Productlis";
import UserInfo from "./components/UserInfo";
import User from "./components/props";
import Conditionalrendering from "./components/Conditionalrendering";
import Conditonalrend from "./components/Conditonalrend";
import Userstate from "./components/Userstate";

const App=()=>{
  return(
  <div >

    {/* 1st task */}
    <Header/>
    <Main/>
    <Footer/>
    {/* 2nd task */}
    <Productinfo/>
    {/* 3rd task */}
    <UserInfo/>
    {/* 4th task */}
    <Productlis/>
    {/* 5th task */}
    <User/>
    {/* 6th task */}
    <Conditionalrendering/>
    {/* 7th task */}
    <Conditonalrend/>
    {/* user state */}
    <Userstate loggedin={true} isAdmin={true}/>
  </div>
  )
}
export default App;