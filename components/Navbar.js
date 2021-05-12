import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Gil Jetomo</h1>
      </div>
      <Link href="/"><a>ABOUT</a></Link>
      <Link href="/projects"><a>PROJECTS</a></Link>
      <Link href="/contact"><a>CONTACT</a></Link>
    </nav>
  );
}
 
export default Navbar;