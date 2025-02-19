fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
      const userIP = data.ip;
      console.log("Endereço IP do visitante:", userIP);

      // Registrar data/hora
      const now = new Date().toISOString();
      console.log("Data/Hora:", now);
  })
  .catch(error => console.error("Erro ao obter IP:", error));
