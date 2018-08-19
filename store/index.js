import Vuex from "vuex"
import Axios from "axios"

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: [],
    },
    getters: {
      users(state) {
        return state.users
      }
    },
    mutations: {
      getUsers(state, users) {
        state.users = users
      },
      removeUser(state, userId) {
        state.users.splice(userId, 1)
      }
    },
    actions: {
      async getUsers(context) {
        const req = await Axios.get("https://jsonplaceholder.typicode.com/users")
        context.commit("getUsers", req.data)
      },
      async removeUser(context, userId) {
        //const req = await Axios.get("https://jsonplaceholder.typicode.com/users")
        context.commit("removeUser", userId)
      }
    }
  });
};

export default createStore