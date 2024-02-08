import React, { useState, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import burger from "../../img/homeburger.png";
import {
  Containeritems,
  H1,
  P,
  ContainerInput,
  Input,
  Button,
  Burger,
} from "./styles";

function Home() {
  const [ordersInfo, setInfos] = useState([]);
  const inputName = useRef();
  const inputOrder = useRef();

  async function addNewOrders() {
    try {
      if (!inputOrder.current.value.trim() || !inputName.current.value.trim()) {
        alert("Você não preencheu todos os campos corretamente");
        return;
      }

      const { data: newOrder } = await axios.post(`http://localhost:3002/order`, {
        orderName: inputName.current.value,
        clientName: inputOrder.current.value,
        id: uuidv4(),
      });

      setInfos([...ordersInfo, newOrder]);

      // Limpar os campos após adicionar um novo pedido
      inputOrder.current.value = "";
      inputName.current.value = "";
    } catch (error) {
      console.error("Erro ao adicionar novo pedido:", error);
      // Adicione um alerta ou feedback de erro aqui, se necessário
    }
  }

  return (
    <Containeritems>
      <Burger src={burger} alt="logo" />
      <H1>Faça seu Pedido!</H1>
      <ContainerInput>
        <P>Pedido</P>
        <Input ref={inputOrder} />
        <P>Nome do Cliente</P>
        <Input ref={inputName} />
        <Button to="/orders" onClick={addNewOrders}>Novo Pedido</Button>
      </ContainerInput>
    </Containeritems>
  );
}

export default Home;
