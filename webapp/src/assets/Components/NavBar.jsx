const NavBar = () => {
  return (
    <>
      <ul className='navBar' style={{ listStyleType: 'none' }}>
        <button>
          Chi sono
        </button>
        <button>
          Le mie competenze
        </button>
        <button>Le mie passioni</button>
        <button>Scarica CV</button>
        <button>Contatti</button>
      </ul>
    </>
  );
}

export default NavBar