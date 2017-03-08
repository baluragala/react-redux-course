
export function getRepos(username) {
  return {
   type:'GET_REPOS',
    username: username
 }
}

export function loadRepos(username,repos){
  return {
    type:'LOAD_REPOS',
    username,
    repos
  }
}

export function changeUsername(username){
  console.log(username)
  return {
    type:'CHANGE_USERNAME',
    username
  }
}
