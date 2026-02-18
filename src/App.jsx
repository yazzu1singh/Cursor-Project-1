import React from 'react';

function App() {
  const phoneNumber = "919876543210"; 
  const emailAddress = "sales@royalorchard.in"; 

  const team = [
    { name: "Chetan Sood", role: "Director Logistics & India Operations", img: "/chetan.jpg" },
    { name: "Lalit Thakur", role: "Director Sales", img: "/lalit.jpg" },
    { name: "Gulshan Kalta", role: "Director Sales", img: "/gulshan.jpg" },
    { name: "Yajuvinder Singh", role: "Director Marketing & EU Partnerships", img: "/yajuvinder.jpg" }
  ];

  const products = [
    { 
      name: "Gala Series", 
      desc: "High-color stability and early maturity.",
      img: "/gala.jpg"
    },
    { 
      name: "Red Delicious", 
      desc: "The industry standard for spur-type apples.",
      img: "/red-delicious.jpg"
    },
    { 
      name: "Apple Rootstocks", 
      desc: "Elite M9 and MM106 rootstocks.",
      img: "/rootstock.jpg" 
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', margin: 0, backgroundColor: '#fff' }}>
      
      {/* NAVIGATION */}
      <nav style={{ padding: '20px 5%', borderBottom: '2px solid #2d5a27', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
        <div style={{ fontWeight: '900', color: '#2d5a27' }}>ROYAL ORCHARD IMPORTS LTD.</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#about" style={{ textDecoration: 'none', color: '#333' }}>About</a>
          <a href="#catalogue" style={{ textDecoration: 'none', color: '#333' }}>Catalogue</a>
        </div>
      </nav>

      {/* ABOUT & TEAM */}
      <section id="about" style={{ padding: '60px 10%', textAlign: 'center', backgroundColor: '#f4f7f4' }}>
        <h2>About Us</h2>
        <p>Based in Rohru, Shimla, we provide high-quality plant material to growers.</p>

        <h3 style={{ marginTop: '40px' }}>Meet Our Team</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
          {team.map((person, index) => (
            <div key={index} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
              <img 
                src={person.img} 
                alt={person.name} 
                style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', display: 'block', margin: '0 auto 10px auto', border: '2px solid #2d5a27' }} 
              />
              <h4 style={{ margin: '5px 0' }}>{person.name}</h4>
              <p style={{ fontSize: '0.8rem', color: '#666' }}>{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATALOGUE */}
      <section id="catalogue" style={{ padding: '60px 5%', textAlign: 'center' }}>
        <h2>Our Catalogue</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {products.map((item, index) => (
            <div key={index} style={{ border: '1px solid #eee', borderRadius: '10px', overflow: 'hidden' }}>
              <img src={item.img} alt={item.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h4>{item.name}</h4>
                <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px 5%', backgroundColor: '#1a3317', color: '#fff', textAlign: 'center' }}>
        <p>Phone: {phoneNumber} | Email: {emailAddress}</p>
        <p>Upper Rohru Bazar, Rohru, Shimla, HP</p>
      </footer>
    </div>
  );
}

export default App;