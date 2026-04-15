import React from 'react';

function App() {
  const phoneNumber = "919218598160";
  const emailAddress = "info@applewayimports.co.in";

  const team = [
    { name: "Chetan Sood", role: "Director — Logistics & India Operations", img: "/chetan-new.jpg" },
    { name: "Lalit Thakur", role: "Director — Sales", img: "/lalit.jpg" },
    { name: "Gulshan Kalta", role: "Director — Sales", img: "/gulshan.jpg" },
    { name: "Yajuvinder Singh", role: "Director — Marketing & EU Partnerships", img: "/yajuvinder.jpg" }
  ];

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800", alt: "Apple Orchard" },
    { url: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=800", alt: "Red Apples" },
    { url: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800", alt: "Apple Harvest" },
    { url: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800", alt: "Fresh Apples" }
  ];

  const products = [
    {
      name: "Gala Series (Simmons / Buckeye / T-Rex)",
      desc: "The Gala series represents the pinnacle of modern apple farming. Varieties like Simmons, Buckeye and the new CIV-exclusive T-Rex are celebrated for their exceptional high-colour stability and early maturity. These apples develop a deep, attractive full-red blush even at the high altitudes of Himachal Pradesh (5,500–7,500 ft), ensuring growers achieve premium market rates. They offer a perfect balance of sweetness and crunch with excellent shelf life.",
      img: "/gala.jpg"
    },
    {
      name: "Red Delicious (Super Chief)",
      desc: "Super Chief is the industry standard for spur-type Red Delicious apples. It is highly prized for its classic five-point shape and intense, uniform red finish. This variety is specifically selected for its ability to colour early and maintain firmness. Ideal for high-density plantations where consistent fruit size and superior colour are the primary goals for commercial success.",
      img: "/red-delicious.jpg"
    },
    {
      name: "Certified Apple Rootstocks",
      desc: "Our elite M9 and MM106 rootstocks are the foundation of a productive orchard. These virus-free, certified rootstocks are imported to ensure tree longevity and consistent yield. M9 is perfect for high-density planting and encourages early fruiting, while MM106 provides excellent anchorage and vigour for various soil types. All rootstocks are hardened and ready for the unique climate of the Himalayas.",
      img: "/rootstock.jpg"
    }
  ];

  return (
    <div style={{ fontFamily: 'Georgia, serif', margin: 0, backgroundColor: '#fff', scrollBehavior: 'smooth' }}>

      {/* WHATSAPP BUTTON */}
      <a
        href={"https://wa.me/" + phoneNumber}
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'fixed', bottom: '24px', right: '24px',
          backgroundColor: '#25D366', color: '#fff',
          padding: '14px 22px', borderRadius: '50px',
          fontWeight: 'bold', textDecoration: 'none',
          zIndex: 1000, boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
          fontSize: '1rem', letterSpacing: '0.5px'
        }}>
        💬 WhatsApp Us
      </a>

      {/* NAVIGATION */}
      <nav style={{
        padding: '20px 6%', borderBottom: '2px solid #1a4d2e',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 100,
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <img src="/Stylized_apple_logo_with_tree.png" alt="AppleWay Imports Logo" style={{ height: '60px', width: 'auto' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: '900', color: '#1a4d2e', fontSize: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              AppleWay Imports
            </span>
            <span style={{ fontSize: '0.75rem', color: '#888', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Pvt. Ltd.
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['About', 'Gallery', 'Catalogue', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              textDecoration: 'none', color: '#1a4d2e',
              fontWeight: '600', fontSize: '1rem', letterSpacing: '0.5px',
              borderBottom: '2px solid transparent',
              transition: 'border-color 0.2s'
            }}
              onMouseEnter={e => e.target.style.borderBottomColor = '#1a4d2e'}
              onMouseLeave={e => e.target.style.borderBottomColor = 'transparent'}
            >{link}</a>
          ))}
        </div>
      </nav>

      {/* HERO SECTION */}
      <header style={{
        padding: '130px 20px', textAlign: 'center',
        background: 'linear-gradient(135deg, #1a4d2e 0%, #2d7a47 60%, #1a4d2e 100%)',
        color: '#fff', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)',
          pointerEvents: 'none'
        }} />
        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🍎</div>
        <h1 style={{
          fontSize: '3.8rem', margin: '0 0 10px 0',
          fontWeight: '900', letterSpacing: '3px', textTransform: 'uppercase'
        }}>
          AppleWay Imports Pvt. Ltd.
        </h1>
        <p style={{ fontSize: '1.4rem', marginTop: '16px', opacity: 0.85, letterSpacing: '1px' }}>
          Elite Apple Genetics &amp; Virus-Free Rootstocks from Europe
        </p>
        <p style={{ fontSize: '1rem', marginTop: '10px', opacity: 0.65, letterSpacing: '1px' }}>
          Himachal Pradesh · India · Est. 2024
        </p>
        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#catalogue" style={{
            backgroundColor: '#fff', color: '#1a4d2e',
            padding: '14px 32px', borderRadius: '4px',
            fontWeight: '700', textDecoration: 'none', fontSize: '1rem', letterSpacing: '0.5px'
          }}>View Catalogue</a>
          <a href="#contact" style={{
            backgroundColor: 'transparent', color: '#fff',
            padding: '14px 32px', borderRadius: '4px', border: '2px solid rgba(255,255,255,0.6)',
            fontWeight: '700', textDecoration: 'none', fontSize: '1rem', letterSpacing: '0.5px'
          }}>Get in Touch</a>
        </div>
      </header>

      {/* ABOUT US SECTION */}
      <section id="about" style={{ padding: '100px 10%', backgroundColor: '#f7f9f7' }}>
        <h2 style={{ fontSize: '3rem', color: '#1a4d2e', textAlign: 'center', marginBottom: '50px', letterSpacing: '1px' }}>
          About Us
        </h2>

        {/* Key Facts Strip */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px', maxWidth: '900px', margin: '0 auto 60px auto'
        }}>
          {[
            { stat: '5,500–7,500 ft', label: 'Planting Altitude' },
            { stat: 'European Union', label: 'Source Region' },
            { stat: 'In Progress', label: 'Import License' },
            { stat: 'HP · UK · J&K', label: 'Target Markets' }
          ].map((item, i) => (
            <div key={i} style={{
              backgroundColor: '#fff', padding: '28px 20px', borderRadius: '12px',
              textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              borderTop: '4px solid #1a4d2e'
            }}>
              <div style={{ fontSize: '1.6rem', fontWeight: '900', color: '#1a4d2e' }}>{item.stat}</div>
              <div style={{ fontSize: '0.85rem', color: '#777', marginTop: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{item.label}</div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* MISSION STATEMENT */}
          <div style={{
            backgroundColor: '#1a4d2e', borderRadius: '16px',
            padding: '44px', marginBottom: '50px',
            boxShadow: '0 8px 30px rgba(26,77,46,0.15)'
          }}>
            <div style={{ fontSize: '0.75rem', color: '#7ecb8f', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Our Mission
            </div>
            <p style={{ lineHeight: '1.9', fontSize: '1.2rem', color: '#fff', marginBottom: '20px' }}>
              At AppleWay Imports, we believe that every orchardist in the Himalayas deserves access to the finest apple genetics in the world — not just the privileged few. Our mission is to bring certified, high-quality European apple planting material to Indian growers at <strong style={{ color: '#7ecb8f' }}>competitive and fair prices</strong>, empowering the common orchardist to build productive, profitable orchards and boost their local economy.
            </p>
            <p style={{ lineHeight: '1.9', fontSize: '1.2rem', color: '#fff', marginBottom: '20px' }}>
              We are equally committed to the environment. Every variety we import is selected not only for yield and colour, but for its compatibility with <strong style={{ color: '#7ecb8f' }}>sustainable, low-input horticultural practices</strong> suited to the fragile Himalayan ecosystem — including high-density planting systems, virus-free certified material, and reduced pesticide requirements. We believe that growing better apples and protecting our mountains are not competing goals — they go hand in hand.
            </p>
            <p style={{ lineHeight: '1.9', fontSize: '1.2rem', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
              AppleWay Imports is being built from the ground up with full regulatory compliance, transparency, and a long-term vision — because the orchardists of Himachal Pradesh deserve nothing less.
            </p>
          </div>

          {/* WHO WE ARE */}
          <p style={{ lineHeight: '1.9', fontSize: '1.25rem', color: '#333', marginBottom: '24px', textAlign: 'justify' }}>
            <strong>AppleWay Imports Pvt. Ltd.</strong> is a dynamic young startup rooted in the apple-growing heartland of the <strong>Shimla region, Himachal Pradesh</strong>, with its headquarters in <strong>Mohali, Punjab</strong>. We are dedicated to revolutionising apple farming in India by providing access to world-class, virus-free, certified plant material sourced from leading nurseries across the <strong>European Union</strong>.
          </p>
          <p style={{ lineHeight: '1.9', fontSize: '1.25rem', color: '#333', marginBottom: '24px', textAlign: 'justify' }}>
            Behind AppleWay is a dedicated team of <strong>local orchardists with generations of Himalayan farming knowledge</strong>, qualified horticultural experts, international business advisors, and investors — backed by over <strong>30 years of combined global import and export experience</strong>. This unique combination of local expertise and international reach is what sets AppleWay apart.
          </p>
          <p style={{ lineHeight: '1.9', fontSize: '1.25rem', color: '#333', marginBottom: '24px', textAlign: 'justify' }}>
            Our focus is on importing elite apple genetics — including the latest dark Gala clones and high-performance rootstocks — that are specifically suited to the diverse micro-climates of the Himalayan region at altitudes between <strong>5,500 and 7,500 feet above sea level</strong>. We champion high-density planting systems, virus-free certified varieties, and sustainable practices that reduce pesticide dependency and protect the fragile mountain environment.
          </p>
          <p style={{ lineHeight: '1.9', fontSize: '1.25rem', color: '#333', textAlign: 'justify' }}>
            AppleWay is currently in the process of obtaining all necessary regulatory approvals from the Government of India, including our <strong>Plant Quarantine Import Permit</strong> from the Directorate of Plant Protection, Quarantine & Storage (PPQS) and our <strong>fruit plant nursery registration</strong> under the Himachal Pradesh Fruit Plant Nurseries Registration and Regulation Act, 2015. Our Post Entry Quarantine (PEQ) site in Rohru, District Shimla is being established in full compliance with all applicable Indian plant quarantine regulations. We are committed to doing this right — transparently, legally, and with the long-term benefit of Indian orchardists at heart.
          </p>
        </div>

        {/* TEAM */}
        <h3 style={{
          fontSize: '2.4rem', color: '#1a4d2e', textAlign: 'center',
          marginTop: '90px', marginBottom: '50px', letterSpacing: '1px'
        }}>
          Our Leadership
        </h3>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '28px', maxWidth: '1100px', margin: '0 auto'
        }}>
          {team.map((person, index) => (
            <div key={index} style={{
              backgroundColor: '#fff', padding: '36px 24px',
              borderRadius: '16px', boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              borderBottom: '5px solid #1a4d2e', textAlign: 'center'
            }}>
              <img
                src={person.img}
                alt={person.name}
                style={{
                  width: '130px', height: '130px', borderRadius: '50%',
                  objectFit: 'cover', display: 'block', margin: '0 auto 20px auto',
                  border: '4px solid #1a4d2e'
                }}
              />
              <h4 style={{ margin: '0', color: '#1a4d2e', fontSize: '1.3rem', fontWeight: '700' }}>{person.name}</h4>
              <p style={{ margin: '10px 0 0', color: '#666', fontSize: '0.95rem', fontWeight: '600', lineHeight: '1.4' }}>{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" style={{ padding: '100px 5%', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '60px', color: '#1a4d2e', letterSpacing: '1px' }}>
          Orchard Gallery
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px', maxWidth: '1200px', margin: '0 auto'
        }}>
          {galleryImages.map((image, index) => (
            <div key={index} style={{
              overflow: 'hidden', borderRadius: '12px',
              height: '280px', boxShadow: '0 6px 18px rgba(0,0,0,0.12)'
            }}>
              <img src={image.url} alt={image.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CATALOGUE SECTION */}
      <section id="catalogue" style={{ padding: '100px 5%', backgroundColor: '#f7f9f7' }}>
        <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '16px', color: '#1a4d2e', letterSpacing: '1px' }}>
          Our Catalogue
        </h2>
        <p style={{ textAlign: 'center', color: '#777', fontSize: '1.1rem', marginBottom: '60px' }}>
          All varieties are virus-indexed, certified, and imported from leading European nurseries
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px', maxWidth: '1100px', margin: '0 auto' }}>
          {products.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              border: '1px solid #e8ede8', borderRadius: '20px',
              overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              flexWrap: 'wrap', backgroundColor: '#fff'
            }}>
              <img src={item.img} alt={item.name} style={{ width: '420px', height: '380px', objectFit: 'cover', flexShrink: 0 }} />
              <div style={{ padding: '44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1, minWidth: '280px' }}>
                <div style={{ fontSize: '0.75rem', color: '#1a4d2e', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                  AppleWay Select
                </div>
                <h3 style={{ color: '#1a4d2e', margin: '0 0 20px 0', fontSize: '1.9rem', fontWeight: '800' }}>{item.name}</h3>
                <p style={{ fontSize: '1.15rem', color: '#444', lineHeight: '1.8', margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FOOTER */}
      <footer id="contact" style={{ padding: '90px 5%', backgroundColor: '#1a4d2e', color: '#fff' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '50px', maxWidth: '1100px', margin: '0 auto'
        }}>
          <div>
            <div style={{ fontWeight: '900', fontSize: '1.6rem', letterSpacing: '2px', marginBottom: '6px' }}>APPLEWAY IMPORTS</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '30px' }}>PVT. LTD.</div>
            <h3 style={{ color: '#7ecb8f', fontSize: '1.2rem', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>Contact Us</h3>
            <p style={{ fontSize: '1.1rem', margin: '10px 0', color: 'rgba(255,255,255,0.85)' }}>
              📞 <a href="tel:+358403772832" style={{ color: 'inherit', textDecoration: 'none' }}>+358-403 772 832 (Finland)</a>
            </p>
            <p style={{ fontSize: '1.1rem', margin: '10px 0', color: 'rgba(255,255,255,0.85)' }}>
              📞 <a href="tel:+919218598160" style={{ color: 'inherit', textDecoration: 'none' }}>+91-92185 98160 (India)</a>
            </p>
            <p style={{ fontSize: '1.1rem', margin: '10px 0', color: 'rgba(255,255,255,0.85)' }}>
              ✉️ <a href={"mailto:" + emailAddress} style={{ color: 'inherit', textDecoration: 'none' }}>{emailAddress}</a>
            </p>
            <p style={{ fontSize: '1.1rem', margin: '10px 0', color: 'rgba(255,255,255,0.85)' }}>
              🌐 <a href="https://www.applewayimports.co.in" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>www.applewayimports.co.in</a>
            </p>
            <p style={{ fontSize: '1.1rem', margin: '10px 0', color: 'rgba(255,255,255,0.85)' }}>
              💬 <a href={"https://wa.me/" + phoneNumber} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>WhatsApp Us</a>
            </p>
          </div>
          <div>
            <h3 style={{ color: '#7ecb8f', fontSize: '1.2rem', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>Registered Office</h3>
            <p style={{ fontSize: '1.1rem', margin: '6px 0', color: 'rgba(255,255,255,0.85)', lineHeight: '1.8' }}>
              Plot No. 734, Sector 82,<br />
              JLPL Industrial Area,<br />
              Near Chandigarh International Airport,<br />
              Mohali – 160 055, Punjab, India
            </p>
          </div>
          <div>
            <h3 style={{ color: '#7ecb8f', fontSize: '1.2rem', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>Operations</h3>
            <p style={{ fontSize: '1.1rem', margin: '6px 0', color: 'rgba(255,255,255,0.85)', lineHeight: '1.8' }}>
              District Shimla,<br />
              Himachal Pradesh, India
            </p>
          </div>
        </div>
        <div style={{
          textAlign: 'center', marginTop: '60px',
          paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)',
          color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem'
        }}>
          © {new Date().getFullYear()} AppleWay Imports Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
