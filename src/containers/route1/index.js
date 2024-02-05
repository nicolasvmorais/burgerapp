import burger from "../../img/route1.png"
import trash from "../../img/18297 4.svg"
import { H1,MainContainer,Image,Users } from "./styles";
import { useEffect,React } from "react";

function Orders() {
  
  const [users, setUsers] = useState([]);
  
  useEffect(() =>{
  async function fetchUsers(){
    const {data:newUser} = await axios.get("http://localhost:3002/orders");

   setUsers(newUser)}

   fetchUsers()
  },[users])

  async function deleteInfo(userId) {
    
    await axios.delete(`http://localhost:3001/order/${userId}`)
    
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  }
  
  return (
    <MainContainer>
      <Image src={burger} alt="logo" />
        <H1>Pedidos</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteInfo(user.id)}>
                <img alt="trash can" src={Trash}></img>
              </button>
            </User>
          ))}
        </ul>
     </MainContainer>
  );
}

export default Orders;
        
    
