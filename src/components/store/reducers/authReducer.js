import { Login } from "../../loginForm"

// export const UserData={
    
//     id:'',username:'',email:'',password:'',cellnumber:''
//     // {id:2,username:'ezzah',email:'ezzah@gmail.com',password:'345678',cellnumber:'090087654'},
//     // {id:3,username:'ezzah',email:'ezzah@gmail.com',password:'345678',cellnumber:'090087654'}
    
    
    
    
    
//     }

    const authReducer=(state={user:null},action)=>{
        switch (action.type) {


            case 'LOGIN':

            console.log(action.payload);
    
              return  {user:action.payload}
              
              
            case 'LOGOUT':
              return state 
            default:
              return state
          }
        // return state
            }


    
    export default authReducer