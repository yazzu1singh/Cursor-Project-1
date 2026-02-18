import React from 'react';

function App() {
  const phoneNumber = "919876543210"; 
  const emailAddress = "sales@royalorchard.in"; 

  // --- UPDATED NAME: GULSHAN KALTA ---
  const team = [
    { name: "Chetan Sood", role: "Director Logistics & India Operations" },
    { name: "Lalit Thakur", role: "Director Sales" },
    { name: "Gulshan Kalta", role: "Director Sales" },
    { name: "Yajuvinder Singh", role: "Director Marketing & EU Partnerships" }
  ];

  const products = [
    { 
      name: "Gala Series (Simmons/Buckeye)", 
      desc: "High-color stability and early maturity. Perfect for the lower belts of HP.",
      img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800"
    },
    { 
      name: "Red Delicious (Super Chief)", 
      desc: "The industry standard for spur-type apples with a classic five-point shape.",
      img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=800"
    },
    { 
      name: "Certified Apple Rootstocks", 
      desc: "Elite M9 and MM106 rootstocks for tree longevity and consistent yield.",
      img: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800"
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', margin: 0, backgroundColor: '#fff', scrollBehavior: 'smooth' }}>
      
      {/* WHATSAPP */}
      <a href={"https://wa.me/" + phoneNumber} target="_blank" rel="noreferrer" style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#25D366', color: '#fff', padding: '12px 20px', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none', zIndex: 1000, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
        WhatsApp Us
      </a>

      {/* NAV */}
      <nav style={{ padding: '20px 5%', borderBottom: '2px solid #2d5a27', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 100 }}>
        <div style={{ fontWeight: '900', color: '#2d5a27', fontSize: '1.2rem' }}>ROYAL ORCHARD IMPORTS LTD.</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#about" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>About</a>
          <a href="#catalogue" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Catalogue</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <header style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: '#2d5a27', color: '#fff' }}>
        <h1 style={{ fontSize: '3rem', margin: 0, fontWeight: '900' }}>ROYAL ORCHARD IMPORTS LTD.</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Elite Apple Genetics & Virus-Free Rootstocks</p>
      </header>

      {/* ABOUT & TEAM */}
      <section id="about" style={{ padding: '80px 10%', textAlign: 'center', backgroundColor: '#f4f7f4' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#1a3317', marginBottom: '20px' }}>About Us</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem', color: '#444' }}>
          Based in <strong>Rohru, Shimla</strong>, we provide high-quality, virus-free plant material to growers across Himachal Pradesh.
        </p>

        <h3 style={{ fontSize: '2rem', color: '#1a3317', marginTop: '60px', marginBottom: '30px' }}>Meet Our Team</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>
          {team.map((person, index) => (
            <div key={index} style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderBottom: '4px solid #2d5a27' }}>
              <h4 style={{ margin: '0', color: '#2d5a27', fontSize: '1.2rem' }}>{person.name}</h4>
              <p style={{ margin: '10px 0 0', color: '#666', fontSize: '0.95rem', fontWeight: '500' }}>{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATALOGUE */}
      <section id="catalogue" style={{ padding: '80px 5%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>Our Catalogue</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {products.map((item, index) => (
            <div key={index} style={{ border: '1px solid #eee', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <img src={item.img} alt={item.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <h3 style={{ color: '#2d5a27', margin: '0 0 10px 0' }}>{item.name}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" style={{ padding: '60px 5%', backgroundColor: '#1a3317', color: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
          <div>
            <h3 style={{ color: '#8bc34a' }}>Contact Us</h3>
            <p>Phone: {phoneNumber}</p>
            <p>Email: {emailAddress}</p>
          </div>
          <div>
            <h3 style={{ color: '#8bc34a' }}>Our Location</h3>
            <p>Upper Rohru Bazar, Rohru</p>
            <p>Distt. Shimla, HP - 171207</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;