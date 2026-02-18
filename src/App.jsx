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

  // These are your product descriptions restored to full length
  const products = [
    { 
      name: "Gala Series (Simmons/Buckeye)", 
      desc: "The Gala series represents the pinnacle of modern apple farming. Varieties like Simmons and Buckeye are celebrated for their exceptional high-color stability and early maturity. These apples develop a deep, attractive red blush even in the lower belts of Himachal Pradesh, ensuring growers get premium market rates. They offer a perfect balance of sweetness and crunch with an excellent shelf life.",
      img: "/gala.jpg" 
    },
    { 
      name: "Red Delicious (Super Chief)", 
      desc: "Super Chief is the industry standard for spur-type Red Delicious apples. It is highly prized for its classic five-point shape and intense, uniform red finish. This variety is specifically selected for its ability to color early and maintain its firmness. It is ideal for high-density plantations where consistent fruit size and superior color are the primary goals for commercial success.",
      img: "/red-delicious.jpg.jpg" 
    },
    { 
      name: "Certified Apple Rootstocks", 
      desc: "Our elite M9 and MM106 rootstocks are the foundation of a productive orchard. These virus-free, certified rootstocks are imported to ensure tree longevity and consistent yield. M9 is perfect for high-density planting, encouraging early fruiting, while MM106 provides excellent anchorage and vigor for various soil types. We ensure our rootstocks are hardened and ready for the unique climate of the Himalayas.",
      img: "/rootstock.jpg" 
    }
  ];

  // Gallery placeholders - replace URLs with your local photos if you have them
  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800", alt: "Orchard" },
    { url: "https://images.unsplash.com/photo-1594755335927-975000459db9?w=800", alt: "Apples" },
    { url: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800", alt: "Harvest" },
    { url: "https://images.unsplash.com/photo-1615485290382-441e4d019cb0?w=800", alt: "Packing" }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', margin: 0, backgroundColor: '#fff', scrollBehavior: 'smooth' }}>
      
      {/* WHATSAPP BUTTON */}
      <a href={"https://wa.me/" + phoneNumber} target="_blank" rel="noreferrer" style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#25D366', color: '#fff', padding: '15px 25px', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none', zIndex: 1000, boxShadow: '0 4px 15px rgba(0,0,0,0.3)', fontSize: '1.1rem' }}>
        WhatsApp Us
      </a>

      {/* NAVIGATION */}
      <nav style={{ padding: '25px 5%', borderBottom: '3px solid #2d5a27', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 100 }}>
        <div style={{ fontWeight: '900', color: '#2d5a27', fontSize: '1.6rem', letterSpacing: '1px' }}>ROYAL ORCHARD IMPORTS LTD.</div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="#about" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '1.2rem' }}>About</a>
          <a href="#gallery" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '1.2rem' }}>Gallery</a>
          <a href="#catalogue" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '1.2rem' }}>Catalogue</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '1.2rem' }}>Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: '#2d5a27', color: '#fff' }}>
        <h1 style={{ fontSize: '4.5rem', margin: 0, fontWeight: '900', textTransform: 'uppercase' }}>ROYAL ORCHARD IMPORTS LTD.</h1>
        <p style={{ fontSize: '1.8rem', marginTop: '15px', opacity: 0.9 }}>Elite Apple Genetics & Virus-Free Rootstocks</p>
      </header>

      {/* ABOUT US & TEAM SECTION */}
      <section id="about" style={{ padding: '100px 10%', backgroundColor: '#f4f7f4' }}>
        <h2 style={{ fontSize: '3.5rem', color: '#1a3317', textAlign: 'center', marginBottom: '40px' }}>About Us</h2>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ lineHeight: '1.9', fontSize: '1.4rem', color: '#333', marginBottom: '25px', textAlign: 'justify' }}>
            Royal Orchard Imports Ltd. is a premier horticultural company based in <strong>Rohru, Shimla</strong>. We are dedicated to revolutionizing apple farming in India by providing access to world-class, virus-free plant material. Our expertise lies in identifying and importing elite apple genetics that are specifically suited for the diverse micro-climates of the Himalayan region.
          </p>
        </div>

        {/* TEAM LEADERSHIP */}
        <h3 style={{ fontSize: '2.8rem', color: '#1a3317', textAlign: 'center', marginTop: '80px', marginBottom: '50px' }}>Meet Our Leadership</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {team.map((person, index) => (
            <div key={index} style={{ backgroundColor: '#fff', padding: '35px', borderRadius: '15px', boxShadow: '0 6px 18px rgba(0,0,0,0.08)', borderBottom: '6px solid #2d5a27', textAlign: 'center' }}>
              <img src={person.img} alt={person.name} style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', display: 'block', margin: '0 auto 20px auto', border: '3px solid #2d5a27' }} />
              <h4 style={{ margin: '0', color: '#2d5a27', fontSize: '1.5rem' }}>{person.name}</h4>
              <p style={{ margin: '10px 0 0', color: '#555', fontSize: '1.1rem', fontWeight: '600' }}>{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION (NEW) */}
      <section id="gallery" style={{ padding: '100px 5%', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center', fontSize: '3.5rem', marginBottom: '60px', color: '#1a3317' }}>Orchard Gallery</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {galleryImages.map((image, index) => (
            <div key={index} style={{ overflow: 'hidden', borderRadius: '15px', height: '280px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
              <img src={image.url} alt={image.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* CATALOGUE SECTION */}
      <section id="catalogue" style={{ padding: '100px 5%', backgroundColor: '#f4f7f4' }}>
        <h2 style={{ textAlign: 'center', fontSize: '3.5rem', marginBottom: '60px', color: '#1a3317' }}>Our Catalogue</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px', maxWidth: '1100px', margin: '0 auto' }}>
          {products.map((item, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', border: '1px solid #eee', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', flexWrap: 'wrap', backgroundColor: '#fff' }}>
              <img src={item.img} alt={item.name} style={{ width: '450px', height: '400px', objectFit: 'cover', flexShrink: 0 }} />
              <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1, minWidth: '300px' }}>
                <h3 style={{ color: '#2d5a27', margin: '0 0 20px 0', fontSize: '2.2rem' }}>{item.name}</h3>
                <p style={{ fontSize: '1.3rem', color: '#444', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FOOTER */}
      <footer id="contact" style={{ padding: '80px 5%', backgroundColor: '#1a3317', color: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <h3 style={{ color: '#8bc34a', fontSize: '2.2rem', marginBottom: '20px' }}>Contact Us</h3>
            <p style={{ fontSize: '1.4rem', margin: '15px 0' }}><strong>Phone:</strong> {phoneNumber}</p>
            <p style={{ fontSize: '1.4rem', margin: '15px 0' }}><strong>Email:</strong> {emailAddress}</p>
          </div>
          <div>
            <h3 style={{ color: '#8bc34a', fontSize: '2.2rem', marginBottom: '20px' }}>Our Location</h3>
            <p style={{ fontSize: '1.4rem', margin: '5px 0' }}>Upper Rohru Bazar, Rohru</p>
            <p style={{ fontSize: '1.4rem', margin: '5px 0' }}>Distt. Shimla, Himachal Pradesh</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;