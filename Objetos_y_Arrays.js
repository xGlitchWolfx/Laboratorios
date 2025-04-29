// objetos

const user = {
    name: "Kevin",
    lastname: "Chacon",
    age: 23,
    address: {
      streets: "Av. 10 de Agosto y Av. Colón"
    }
  };
  
  const { name, lastname, age, address: { streets } } = user;
  console.log(name, lastname, age, streets);
  

  // arrays

const users = [
    {
      name: "Karla",
      lastname: "Mora",
      age: 22,
      address: { streets: "Av. Naciones Unidas y Av. Amazonas" }
    },
    {
      name: "Diego",
      lastname: "Ortega",
      age: 24,
      address: { streets: "Av. 6 de Diciembre y Eloy Alfaro" }
    },
    {
      name: "Santiago",
      lastname: "Vera",
      age: 25,
      address: { streets: "Av. De Los Shyris y Portugal" }
    }
  ];
  
  // Imprimiendo los datos del primer usuario
  const { name: nameUser, lastname: lastnameUser, age: ageUser, address: { streets: streetUser } } = users[0];
  console.log(nameUser, lastnameUser, ageUser, streetUser);
  