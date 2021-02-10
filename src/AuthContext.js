import {createContext} from 'react'
const AuthContext = createContext();

export default AuthContext;

 export const ContextReader=({children})=>{
    var ob={
        islogin:false,
        name: 'Sagor sarkar',
        id:'16cse067'
      }
      const login=()=>{
        alert('yes login')
      }
     

    return(
        <AuthContext.Provider value={{login,...ob}} >
            {children}
        </AuthContext.Provider>
    )


}
