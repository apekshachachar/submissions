const posts=[{title: 'POST1'}, {title:'POST2'}];

function createPost(post){
  return new Promise((resolve,reject)=>{
      posts.push(post);
      const error=false;
      if(!error){
        resolve()
      }
      else{
        reject()
      }   
  })
}

function updateLastUserActivityTime(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    }, 1000)
  })
}

function deletePost(){
  return new Promise((resolve,reject)=>{
    if(posts.length>0){
      resolve(posts.pop())
    }
    else{
      reject("ERROR: All posts are deleted")
    }
  })
}

function printPost(){
  posts.forEach((post)=>{
    console.log(post.title)
  })
}

Promise.all([createPost({title: 'newPOST'}), updateLastUserActivityTime()])
.then(()=>{
  printPost();
  console.log(`this post was created at ${new Date().toString()}`)
})
.then(()=>{
  deletePost().then((dp1)=>{
    console.log(`note that ${dp1.title} is now deleted`)
  })
})
.then(()=>{
  printPost()
})