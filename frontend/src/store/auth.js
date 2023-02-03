import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



const initialAuthState = {
  isAuthenticated: false, email : "", password:""
};
	
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state,action) {
    axios.post("api/auth/login", action.payload)
      .then((res)=>{
        console.log(res);
        console.log(res.headers["authorization"])
        console.log(res.headers["refresh-token"]);
        localStorage.setItem("access_token", res.headers["authorization"]);
        localStorage.setItem("refresh_token", res.headers["refresh-token"]);
        
      }).catch ((err)=>{
        // state.isAuthenticated =false;
          console.log(err);
      })
    state.isAuthenticated =true;
    },

    logout(state) {

      const accessToken = localStorage.getItem('access_token');
      const refreshToken = localStorage.getItem('refresh_token');

      axios.defaults.headers.common['authorization'] = accessToken;
      axios.defaults.headers.common['refresh-token'] = refreshToken;

      axios.post("api/auth/logout").then((res)=>{
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        
        console.log(res);
        
      }).catch((err)=>{
        console.log(err);
      })

      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;