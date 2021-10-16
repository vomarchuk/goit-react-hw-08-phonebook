import { NavLink } from 'react-router-dom';

const Navigations = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};
export default Navigations;
