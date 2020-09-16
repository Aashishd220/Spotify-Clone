export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";

const clientId = "c7174573b08a4129b7803f6b98909094";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
//url:http://localhost:3000/#access_token=BQCFrWwuM7i1UjTRzvOPbTth5lq74cKgOrX933GZLtJRxYf0ObXHn4gjFV0HKRoqWz2aHorpJFPxE57jg-xIZjYKoAqpCqS4czkdS_DwFXms8DgeP_R8Rc2iffC_TPgLOocy2Vywp-gtFg25ESjWvc4mcyUf&token_type=Bearer&expires_in=3600
export const getTokenFromUrl = () => {
    return window.location.hash  //return url from #(#access_token=BQCFrWwuM7i1UjTRzvOPbTth5lq74cKgOrX933GZLtJRxYf0ObXHn4gjFV0HKRoqWz2aHorpJFPxE57jg-xIZjYKoAqpCqS4czkdS_DwFXms8DgeP_R8Rc2iffC_TPgLOocy2Vywp-gtFg25ESjWvc4mcyUf&token_type=Bearer&expires_in=3600)
      .substring(1) //return (access_token=BQCFrWwuM7i1UjTRzvOPbTth5lq74cKgOrX933GZLtJRxYf0ObXHn4gjFV0HKRoqWz2aHorpJFPxE57jg-xIZjYKoAqpCqS4czkdS_DwFXms8DgeP_R8Rc2iffC_TPgLOocy2Vywp-gtFg25ESjWvc4mcyUf&token_type=Bearer&expires_in=3600)
      .split("&") //splitting as we can have multiple params in the url 

                        //0: "access_token=BQCFrWwuM7i1UjTRzvOPbTth5lq74cKgOrX933GZLtJRxYf0ObXHn4gjFV0HKRoqWz2aHorpJFPxE57jg-xIZjYKoAqpCqS4czkdS_DwFXms8DgeP_R8Rc2iffC_TPgLOocy2Vywp-gtFg25ESjWvc4mcyUf"
                        // 1: "token_type=Bearer"
                        // 2: "expires_in=3600"
      .reduce((initial, item) => {  // will go through the items and put everything in initial
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
