import  React,{ useReducer, useEffect , useRef, useCallback} from 'react';
import axios from '../config/http-common';



const GithubContext = React.createContext();
const reducer= (state, action)=>{
   switch(action.type){
    
      case 'userInfo':{
        return {...state, repos:action.setRepos ,user:action.setUser,  followers:action.setFollowers,isLoading:action.setIsLoading, requests: action.setRequests}
      }
      case 'requests':{
         return {...state, requests : action.setRequests}
      }
      case 'initialize':{
         return {...state, isLoading:true, error:''};
      }
      case 'error':{
         return {...state, error:action.setError , isLoading: false};
      }
      default:{
         throw new Error('Unknown Action Type ')
      }
   }
}
function GithubContextProvider({children}) {

 const isMounted = useRef(true);
 const initialState= {user:{}, repos:{}, followers:{}, isLoading:true, error:'',requests:0}
 const [state, dispatch] = useReducer(reducer, initialState);

 const fetchUserData = useCallback(async(username)=>{
      try{
         dispatch({type:"initialize"});
         const userPromise = axios.get(`users/${username}`);
         const reposPromise = axios.get(`/users/${username}/repos?per_page=100`);
         const followersPromise = axios.get(`/users/${username}/followers`);
         const res =await  Promise.all([userPromise, reposPromise, followersPromise]);
         const [{data:user}, {data:repos}, {data:followers} ] = res ;
         const {data:{rate:{remaining}}} =await axios.get('/rate_limit') ;

         dispatch({type:'userInfo', setUser: user,  setRepos:repos, setFollowers:followers,setRequests : remaining, setIsLoading:false }) 
      }catch(e){
         //cancelling axios later
         console.log(new Error(e))
          dispatch({type:'error' , setError:e.message}); 
      }
 },[])
 useEffect(()=>{  
   fetchUserData('wesbos');
   return ()=>{
      isMounted.current= false;
   }
 },[fetchUserData])

 const context ={
    user:state.user,
    repos:state.repos,
    followers:state.followers,
    isLoading: state.isLoading,
    error:state.error,
    requests:state.requests,
    fetchUserData
 }
 return (
  <GithubContext.Provider value={context}>
     {children}
  </GithubContext.Provider>
 )

}

export {GithubContext, GithubContextProvider};
  

 