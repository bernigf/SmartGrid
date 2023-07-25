import React, { useState } from 'react'
import './login.css';

const LoginModal = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeyPress = (e) => {

	  // Check if the "Enter" key is pressed

	  if(e.key === "Enter") {

		  handleLogin();

	  }
  };

  const handleLogin = () => {
    // Read the local users.json file or use an API call to check user credentials
    // For this example, assume the users.json contains an array of user objects like this:
    // const users = [{ username: 'user1', password: 'password1', ... }, { ... }];
    const users = [
       { username: 'user1', password: 'password1', email: 'email@mail.com' },
       { username: 'bernigf', password: 'password', email: 'bernigf@gmail.com' }
    ];
    
    // Check if the provided username and password match any user in the users.json file
    // If found, display a success message; otherwise, show an error message.
    // For simplicity, this example uses a basic linear search, but you can use more sophisticated methods.
    const userFound = users.find(user => user.username === username && user.password === password);

    if (userFound) {
      setMessage(`Welcome, ${userFound.username}!`);
      // You can perform additional actions here, such as setting login status, updating state, etc.
    } else {
      setMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-modal">

      {/* Your CSS styles for the login modal (Twitter-like) */}

      <input type="text"
	  placeholder="User e-mail"
	  value={username}
	  onChange={handleUsernameChange}
	  onKeyPress={handleKeyPress}
	  />

      <input type="password"
	  placeholder="Password"
	  value={password}
	  onChange={handlePasswordChange}
	  onKeyPress={handleKeyPress}
	  />

      <button onClick={handleLogin}>Log in</button>
      <a href="URL_TO_FORGOT_PASSWORD_PAGE">Forgot password?</a>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginModal;
