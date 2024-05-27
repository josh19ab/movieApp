const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Ocean Of Movies</div>
        <div className="space-x-4">
          <a href="/" className="text-white hover:text-gray-200">Home</a>
          <a href="/favorites" className="text-white hover:text-gray-200">Favorites</a>
          
        </div>
      </div>
    </nav>
  );
};


export default Navbar