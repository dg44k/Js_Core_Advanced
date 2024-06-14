async function fetchUserData(username) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const listUsers = await response.json();
    const user = listUsers.find(user => user.username === username);
    
    if (!user) {
      throw new Error('User not found');
    }

    return user;
  } 
	catch (err) {
    console.error('Error fetching user data:', err.message);
  }
}


fetchUserData("Antonette")
  .then(user => {
    if (user) {
      console.log(user);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });