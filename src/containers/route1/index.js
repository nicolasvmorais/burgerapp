import burger from "../../img/route1.png"
import trash from "../../img/18297 4.svg"
import { H1,MainContainer,Image,Users,P } from "./styles";
import { useEffect,React,useState } from "react";
import axios from "axios";

function Orders() {
  
  const [users, setUsers] = useState([]);
  
  useEffect(() =>{
  async function fetchUsers(){
    const {data:newUser} = await axios.get("http://localhost:3002/orders");

   setUsers(newUser)}

   fetchUsers()
  },[users])

  async function deleteInfo(userId) {
    
    await axios.delete(`http://localhost:3002/orders/${userId}`)
    
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  }
  
  return (
    <MainContainer>
      <Image src={burger} alt="logo" />
        <H1>Pedidos</H1>
        <ul>
        {users.map((user) => (
            <Users key={user.id}>
              <P>{user.clientName}</P> <P><b>{user.orderName}</b></P>
              <button to="/" onClick={() => deleteInfo(user.id)}>
                <img alt="trash can" src={trash}></img>
              </button>
            </Users>
          ))}
        </ul>
     </MainContainer>
  );
}

export default Orders;
        
    
