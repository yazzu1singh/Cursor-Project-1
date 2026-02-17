import React from 'react';

function App() {
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
      
      {/* HEADER / NAVIGATION */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 5%', backgroundColor: '#fff', borderBottom: '2px solid #2d5a27', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontWeight: '800', color: '#2d5a27', fontSize: '1.5rem', letterSpacing: '1px' }}>
          ROYAL ORCHARD IMPORTS LTD.
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#home" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Home</a>
          <a href="#about" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>About Us</a>
          <a href="#products" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Catalogue</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="home" style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: '#2d5a27', color: 'white' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '10px', textTransform: 'uppercase' }}>
          Royal Orchard Imports Ltd.
        </h1>
        <p style={{ fontSize: '1.4rem', fontWeight: '300' }}>
          Premium Nursery Stock for the Orchards of Himachal Pradesh
        </p>
      </header>

      {/* NEW: ABOUT US SECTION */}
      <section id="about" style={{ padding: '80px 10%', backgroundColor: '#f9fbf9' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#1a3317', marginBottom: '30px' }}>Rooted in Excellence</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
            Located in the heart of the apple belt in <strong>Rohru, Shimla</strong>, Royal Orchard Imports Ltd. is dedicated to transforming the horticultural landscape of Himachal Pradesh. We specialize in sourcing the world's finest apple genetics directly from elite European breeders.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
            Our mission is simple: to provide local growers with high-yield, virus-free, and climate-resilient nursery stock. By bridging the gap between global innovation and traditional farming, we ensure that every orchard we help plant is built on a foundation of quality and longevity.
          </p>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" style={{ padding: '80px 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {products.map((item, index) => (
          <div key={index} style={{ border: '1px solid #eee', borderRadius: '15px', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
            <img 
              src={item.img} 
              alt={item.name} 
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              onError={(e) => { e.target.src = item.fallback; }} 
            />
            <div style={{ padding: '25px' }}>
              <h3 style={{ color: '#2d5a27', marginTop: 0, fontSize: '1.5rem' }}>{item.name}</h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
              <ul style={{ fontSize: '0.9rem', color: '#444', paddingLeft: '20px', marginTop: '15px' }}>
                {item.specs.map((s, i) => <li key={i} style={{ marginBottom: '5px' }}>{s}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" style={{ padding: '80px 5%', backgroundColor: '#1a3317', color: 'white' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          <div>
            <h3 style={{ color: '#8bc34a', fontSize: '1.6rem', margin: '0 0 15px 0' }}>Royal Orchard Imports Ltd.</h3>
            <p style={{ fontSize: '1rem', opacity: 0.8 }}>Serving the farming community of Rohru and Shimla with elite genetics.</p>
          </div>
          <div>
            <h4 style={{ color: '#8bc34a', margin: '0 0 15px 0' }}>Visit Our Office</h4>
            <p style={{ margin: '8px 0', fontSize: '1.1rem' }}>📍 Upper Rohru Bazar, Rohru</p>
            <p style={{ margin: '8px 0', fontSize: '1.1rem' }}>Distt. Shimla, HP - 171207</p>
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