import getters from './getters'

const state={
      header:true,
      loading:false
};

const mutations={
    showHeader(){
        state.header = true
    },
    hideHeader(){
        state.header = false
    },
    showLoading(){
        state.loading = true
    },
    hideLoading(){
        state.loading = false
    }
}

export default{
    state,
    mutations,
    getters
}
