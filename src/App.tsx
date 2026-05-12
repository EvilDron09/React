
import './App.css'
import {useUsers} from "./api/query/users/useUsers.ts";


const App = () => {
  const {data:users, isFetching, status} = useUsers()

  console.log(users,status);
    if (isFetching) return <div>Loading...</div>

  return (
    <div>
      {
        users?.map(user => {
          return (
              <div key={user.id}>{user.id}---{user.name}</div>
          )
        })
      }
    </div>
  )
}

export default App
