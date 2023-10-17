//create a post
//parellely update last activity time

function createPost() {
  return new Promise(() => {
    updateLastActivityTime();
  });
}
const user = {
  username: "apeksha",
  lastactivitytime: "15th october",
};

function updateLastActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastactivitytime = new Date().getTime();
      resolve(user.lastactivitytime);
    }, 1000);
  });
}

function userUpdatesPost() {
  Promise.all([createPost(), updateLastActivityTime()])
    .then(([createPostresolves, ULATresolves]) => {
      console.log(ULATresolves);
    })
    .catch((err) => console.log(err));
}
createPost();
