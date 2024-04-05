interface User {
  name: string;
}

const user: User = {
  name: "Ervin Howell",
};

// Function to display user's name
function displayUserName(user: User): void {
  console.log(`User's name is: ${user.name}`);
}

// Call the function to display the name
displayUserName(user);
