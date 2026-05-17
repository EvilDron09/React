
import './App.css'
import {useUsers} from "./api/query/users/useUsers.ts";
import {useUser} from "./api/query/users/useUser.ts";
import {useCreatePost} from "./api/query/posts/useCreatePost.ts";
import {useState} from "react";


const App = () => {
  const [postTitle, setPostTitle] = useState<string>('')
  const [postBody, setPostBody] = useState<string>('')

  const {data:users, isFetching, status} = useUsers()
  const {data:user, isFetching: isUserLoading, status:userStatus} = useUser({userId:String(1)});

  const {mutateAsync, data:post} = useCreatePost();

  const handleCreatePost = async ( {userId }: { userId:string }) => {
    try {
          const response = await mutateAsync({userId, body:postBody, title:postTitle});

          if(response){
            console.log(response);
            return
          }
          console.log("No response")
    }catch (e){
      console.error(e)
    }
  }

  console.log(user,isUserLoading,userStatus)
console.log({postTitle, postBody});
  console.log(users,status);
    if (isFetching) return <div>Loading...</div>

  if(post){
    return (
        <>
          <div>{post.id}</div>
          <div>{post.title}</div>
          <div>{post.body}</div>
          <div>{post.userId}</div>
        </>
    )
  }

  return (
    <div>
      {
        users?.map(user => {
          return (
              <div key={user.id}>{user.id}---{user.name}

                <button onClick={async () => await handleCreatePost({userId: String (user.id)})}>Create post by user id</button>
              </div>
          )
        })
      }
      <input  value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
        <input  value={postBody} onChange={(e) => setPostBody(e.target.value)}/>


    </div>
  )
}

export default App
