{/*import Add from "./components/Add";
import Footer from "./components/Footer";
import Greet from "./components/Greeting";
import Header from "./components/Header";
import Main from "./components/Main";

import { act, createContext } from "react";
import ComponentA from "./components/ComponentA";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./components/UserContent";
import UpdateUser from "./components/UpdateUser";

import { useReducer } from "react";
import Counter from "./components/Counter";

import { useRef } from "react";
import FocusInput from "./components/FocusInput";
import Timer from "./components/Timer";

import useFetch from "./components/useFetch";
*/}
import UniqueiD from "./components/UniqueiD";


// export const Data = createContext();
// export const Data1 = createContext();

// const initialState = { count: 0};

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'increment':
//             return {...state, count: state.count +1};
//         case 'decrement':
//             return {...state, count: state.count - 1};
//         case 'reset':
//             return {...state, count: 0};
//         default:
//             return state;
//     }
// };

const  App = () => {
    // const name = 'Jo';
    // const age = 20;

    //const [state, dispatch] = useReducer(reducer, initialState);

    // const inputElement = useRef(null);

    // const focusInput = () => {
    //     inputElement.current.focus(); 
    //     inputElement.current.value = 'yana';
    // }

    //const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');

    return (
        <div>
            {/* 
            <Greet />
            <Add />
            <Header />
            <Main />
            <Footer /> 
            <Data.Provider value={name}>
                <Data1.Provider value={age}>
                    <ComponentA />
                </Data1.Provider>
            </Data.Provider> 
            <UserProvider>
                <UserProfile />
                <UpdateUser />
            </UserProvider>
            <button onClick={() => dispatch({ type: "increment" })}>Plus</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Minus</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <h1>Count: {state.count}</h1>
            <Counter />
            

            <input type="text" ref={inputElement}/>
            <button onClick={() => focusInput()}>Focus & Write Hhskdjh</button>
            
            <FocusInput />
            <Timer />
            
            {data && data.map(item => {
                return <p key={item.id}>{item.title}</p>
            })}
            */}
            <UniqueiD />
        </div>
        
        
    )
}

export default App;