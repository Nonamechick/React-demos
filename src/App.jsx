{/*import Add from "./components/Add";
import Footer from "./components/Footer";
import Greet from "./components/Greeting";
import Header from "./components/Header";
import Main from "./components/Main";
*/}
import { createContext } from "react";
import ComponentA from "./components/ComponentA";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./components/UserContent";
import UpdateUser from "./components/UpdateUser";

export const Data = createContext();
export const Data1 = createContext();

const  App = () => {
    const name = 'Jo';
    const age = 20;

    return (
        <div>
            {/* <Greet />
            <Add /> */}
            {/* <Header />
            <Main />
            <Footer /> */}
            {/* <Data.Provider value={name}>
                <Data1.Provider value={age}>
                    <ComponentA />
                </Data1.Provider>
            </Data.Provider> */}
            <UserProvider>
                <UserProfile />
                <UpdateUser />
            </UserProvider>
        </div>
    )
}

export default App;