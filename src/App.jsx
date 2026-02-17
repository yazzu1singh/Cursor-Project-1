import React from 'react';

function App() {
  // Your business details
  const phoneNumber = "919876543210"; // Replace with your actual number (start with 91)
  const emailAddress = "sales@royalorchard.in"; // Replace with your email

  const products = [
    { 
      name: "Gala Series (Simmons/Buckeye)", 
      desc: "Selected for high-color stability and early maturity. These clones produce a deep red blush even in warmer climates like the lower belts of HP.",
      specs: ["Maturity: Early", "Color: 90-100% Red", "Storage: High Pressure"],
      img: "/gala.jpg",
      fallback: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800"
    },
    { 
      name: "Red Delicious (Super Chief)", 
      desc: "The industry standard for spur-type Red Delicious. Known for its crimson color and classic five-point shape, perfect for high-altitude orchards.",
      specs: ["Type: Spur-type", "Fruit Size: Large", "Growth: Compact"],
      img: "/red-delicious.jpg",
      fallback: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=800"
    },
    { 
      name: "Certified Apple Rootstocks", 
      desc: "Certified M9 and MM106 rootstocks sourced from elite nurseries. The foundation for tree longevity and consistent yield in hilly terrains.",
      specs: ["M9: Dwarfing", "MM106: Semi-vigorous", "Virus-free certified"],
      img: "/root-stock.jpg",
      fallback: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800"
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#333', margin: 0, backgroundColor: '#ffffff', scrollBehavior: 'smooth' }}>
      
      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href={`https://wa.me/${phoneNumber}?text=Hi Royal Orchard, I'm interested in your apple nursery stock.`}
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
          fontWeight: 'bold',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          zIndex: 1000,
          fontSize: '1rem'
        }}
      >
        <span>WhatsApp Us</span>
      </a>

      {/* NAVIGATION */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 5%', backgroundColor: '#fff', borderBottom: '2px solid #2d5a27', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontWeight: '800', color: '#2d5a27', fontSize: '1.5rem', letterSpacing: '1px' }}>
          ROYAL ORCHARD IMPORTS LTD.
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#home" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Home</a>
          <a href="#about" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>About</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <header id="home" style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: '#2d5a27', color: 'white' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '10px', textTransform: 'uppercase' }}>Royal Orchard Imports Ltd.</h1>
        <p style={{ fontSize: '1.4rem' }}>Elite Apple Genetics for Himachal's Growers</p>
      </header>

      {/* ABOUT US */}
      <section id="about" style={{ padding: '80px 10%', backgroundColor: '#f9fbf9', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#1a3317' }}>Rooted in Excellence</h2>
        <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
          Located in <strong>Rohru, Shimla</strong>, we bridge the gap between global innovation and traditional farming by sourcing world-class, virus-free plant material.
        </p>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" style={{ padding: '80px 5%', backgroundColor: '#1a3317', color: 'white' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          <div>
            <h3 style={{ color: '#8bc34a', fontSize: '1.6rem', marginBottom: '15px' }}>Contact Details</h3>
            <p style={{ margin: '10px 0', fontSize: '1.1rem' }}>
              <strong>📞 Phone: </strong> 
              <a href={`tel:${phoneNumber}`} style={{ color: 'white', textDecoration: 'none' }}>+{phoneNumber}</a>
            </p>
            <p style={{ margin: '10px 0', fontSize: '1.1rem' }}>
              <strong>✉️ Email: </strong> 
              <a href={`mailto:${emailAddress}`} style={{ color: 'white', textDecoration: 'none' }}>{emailAddress}</a>
            </p>
          </div>
          <div>
            <h4 style={{ color: '#8bc34a', marginBottom: '15px' }}>Visit Our Office</h4>
            <p>📍 Upper Rohru Bazar, Rohru</p>
            <p>Distt. Shimla, HP - 171207</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px', borderTop: '1px solid #333', paddingTop: '20px', fontSize: '0.9rem', opacity: 0.5 }}>
          © 2026 Royal Orchard Imports Ltd.
        </div>
      </footer>
    </div>
  );
}

export default App;