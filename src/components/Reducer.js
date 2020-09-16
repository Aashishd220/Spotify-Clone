
export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
   //token:'BQC_NL6nCKMazCByuR_qwZ1gBY_mbJzdA-fz2I3Xez4vzEjhkX2jOVph1mbrrwZ7eYjWemr7g5x8XerBGzzHetGShLMyD68lk3EA4XApgS1_Ams-LgIOcWBXlEy9Py0fDtu2rsbLIa0WCpGEIyGjQEfc9J5y'
  };
  

  const reducer=(state,action)=>{
      console.log(action);

      switch(action.type){
          case "SET_USER":
              return {
                  ...state,user:action.user
              }
          case 'SET_TOKEN':
              return {
                  ...state,token:action.token
              }
          case 'SET_PLAYLISTS':
              return {
                  ...state,
                  playlists:action.playlists
              }
           case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly:action.discover_weekly
                }
            default:
                return state;
      }

  }

  export default reducer;