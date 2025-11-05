function status(reguest, response) {
  response.status(200).json({ chave: "se está vendo isso, deu certo!" });
}

export default status;
