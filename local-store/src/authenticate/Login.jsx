import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../app/features/userSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch login action
    dispatch(login({ username, email }));

    // Clear form fields
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center my-8">Login/Register</h2>
      <form className="flex flex-col justify-center items-center my-8" onSubmit={handleSubmit}>
        <input type="text" value={username} placeholder="username to login" className="mb-4 border w-1/3" onChange={(e) => setUsername(e.target.value)} />
        <input type="email" value={email} placeholder="Email" className="mb-4 border w-1/3" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} placeholder="Password" className="mb-4 border w-1/3" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
