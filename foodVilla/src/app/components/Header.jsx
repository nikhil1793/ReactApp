export const Title = () => <a className="logo"></a>;

const Header = () => (
  <header>
    <nav className="flex justify-between items-center py-4 px-4 shadow-lg shadow-gray-400 fixed top-0 w-full bg-white">
      <Title />
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>cart</li>
        <li>Profile</li>
      </ul>
    </nav>
  </header>
);

export default Header;
