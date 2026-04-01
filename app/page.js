'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';

const ADULTS = [
  'Tais','Alexei','Carla','Rodrigo','Ana Claudia',
  'Tuka','Ana','Sabrina','Gustavo','Juliana',
  'Gabriel','Antonio','Lindsay','Ravi','Regi',
  'Amanda','Thiago','Manu','Eddy','David','Naa','Antonio and KOKO'
];
const KIDS = ['Joy','Zen','Noah','Ethan','Maya','Manu','Maris','Davina','Yosi','Tula','Thiago Girls','Ryan','Adonis','Aki'];

// ── YouTube Video ID ─────────────────────────────────────────────────────────
const YT_VIDEO = 'T54ID6d2r5g';
// ─────────────────────────────────────────────────────────────────────────────

// ── Your WhatsApp number (international format, no + or spaces) ──────────────
const WHATSAPP_NUMBER = '14156565950';
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  const [visible, setVisible] = useState({});
  const [copied, setCopied]   = useState(false);
  const [music, setMusic]     = useState(false);
  const [name, setName]       = useState('');
  const [going, setGoing]     = useState('');
  const refs = useRef({});

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.id]: true }));
      }),
      { threshold: 0.1 }
    );
    Object.values(refs.current).forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const reg = id => el => { refs.current[id] = el; };
  const cls = id => `${styles.reveal} ${visible[id] ? styles.show : ''}`;

  const copyAddr = () => {
    navigator.clipboard.writeText('9033 Stinson Beach Way, Elk Grove, CA 95758');
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  const handleRSVP = () => {
    if (!name || !going) return;
    const status  = going === 'yes' ? "I'll be there! 🎉🌮" : "I can't make it 😢";
    const message = `Hi! This is ${name}. RSVP for Alexei's Birthday Party on April 18th: ${status}`;
    const url     = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <main className={styles.main}>

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          {/* top ornament */}
          <div className={styles.ornamentTop}>
            <span className={styles.ornLine}/>
            <span className={styles.ornDiamond}>◆</span>
            <span className={styles.ornLine}/>
          </div>

          <p className={styles.premiumLabel}>— Premium Quality Since Birth —</p>

          <h1 className={styles.vintage}>VINTAGE</h1>

          <div className={styles.scrollBanner}>
            <span className={styles.scrollLeft}/>
            <span className={styles.bannerText}>LIMITED EDITION</span>
            <span className={styles.scrollRight}/>
          </div>

          <div className={styles.medallion}>
            <div className={styles.medallionRing}>
              <p className={styles.medallionTop}>AGED TO</p>
              <p className={styles.medallionBig}>50</p>
              <p className={styles.medallionBot}>PERFECTION</p>
            </div>
          </div>

          <div className={styles.agedRow}>
            <span className={styles.agedWord}>Family</span>
            <span className={styles.agedDot}>✦</span>
            <span className={styles.agedWord}>Friends</span>
            <span className={styles.agedDot}>✦</span>
            <span className={styles.agedWord}>Memories</span>
          </div>

          <div className={styles.legendBanner}>
            <p className={styles.legendText}>YOU'RE INVITED</p>
          </div>

          {/* bottom ornament */}
          <div className={styles.ornamentTop} style={{marginTop:'1.5rem'}}>
            <span className={styles.ornLine}/>
            <span className={styles.ornDiamond}>◆</span>
            <span className={styles.ornLine}/>
          </div>

          <p className={styles.scrollHint}>↓ scroll for details ↓</p>
        </div>
      </section>

      {/* ══ DETAILS ═══════════════════════════════════════════════════════ */}
      <section id="details" ref={reg('details')} className={`${styles.section} ${cls('details')}`}>

        <div className={styles.sectionHeader}>
          <span className={styles.ornLine}/>
          <h2 className={styles.sectionTitle}>The Details</h2>
          <span className={styles.ornLine}/>
        </div>

        <div className={styles.detailGrid}>
          <div className={styles.detailCard}>
            <p className={styles.detailIcon}>📅</p>
            <p className={styles.detailLabel}>WHEN</p>
            <p className={styles.detailValue}>April 18th</p>
            <p className={styles.detailSub}>Saturday · 11:30 AM</p>
          </div>
          <div className={styles.detailCard}>
            <p className={styles.detailIcon}>👗</p>
            <p className={styles.detailLabel}>DRESS</p>
            <p className={styles.detailValue}>Casual</p>
            <p className={styles.detailSub}>Come as you are</p>
          </div>
          <div className={styles.detailCard}>
            <p className={styles.detailIcon}>📬</p>
            <p className={styles.detailLabel}>RSVP BY</p>
            <p className={styles.detailValue}>April 4th</p>
            <p className={styles.detailSub}>Don't be late!</p>
          </div>
        </div>

        {/* Location */}
        <div className={styles.locationBox}>
          <div className={styles.locationHeader}>
            <span className={styles.ornDiamond}>◆</span>
            <span className={styles.locationTitle}>DIAS' PLACE</span>
            <span className={styles.ornDiamond}>◆</span>
          </div>
          <p className={styles.locationAddr}>9033 Stinson Beach Way</p>
          <p className={styles.locationAddr}>Elk Grove, CA 95758</p>
          <div className={styles.locationBtns}>
            <button className={styles.btnGold} onClick={copyAddr}>
              {copied ? '✓ Copied!' : '⧉ Copy Address'}
            </button>
            <a
              className={styles.btnOutline}
              href="https://maps.google.com/?q=9033+Stinson+Beach+Way,+Elk+Grove,+CA+95758"
              target="_blank" rel="noopener noreferrer"
            >
              ↗ Open Maps
            </a>
          </div>
        </div>

        {/* Food & Drinks */}
        <div className={styles.menuBox}>
          <div className={styles.menuHeader}>
            <span className={styles.ornLine}/>
            <h3 className={styles.menuTitle}>Menu & Drinks</h3>
            <span className={styles.ornLine}/>
          </div>
          <div className={styles.menuGrid}>
            <div className={styles.menuCol}>
              <p className={styles.menuColTitle}>FOOD</p>
              <p className={styles.menuItem}>🌮 Taco Bar</p>
              <p className={styles.menuItem}>🎂 Birthday Cake</p>
              <p className={styles.menuItem}>🍬 Sweets</p>
            </div>
            <div className={styles.menuDivider}/>
            <div className={styles.menuCol}>
              <p className={styles.menuColTitle}>DRINKS</p>
              <p className={styles.menuItem}>🍺 Beers</p>
              <p className={styles.menuItem}>💧 Sparkling Water</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GUEST LIST ════════════════════════════════════════════════════ */}
      <section id="guests" ref={reg('guests')} className={`${styles.section} ${cls('guests')}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.ornLine}/>
          <h2 className={styles.sectionTitle}>The Party Crew</h2>
          <span className={styles.ornLine}/>
        </div>

        <div className={styles.guestBlock}>
          <p className={styles.guestGroupLabel}>✦ ADULTS ✦</p>
          <div className={styles.guestList}>
            {ADULTS.map(n => <span key={n} className={styles.guestName}>{n}</span>)}
          </div>
        </div>

        <div className={styles.dividerOrnament}>— ✦ —</div>

        <div className={styles.guestBlock}>
          <p className={styles.guestGroupLabel}>✦ LITTLE LEGENDS ✦</p>
          <div className={styles.guestList}>
            {KIDS.map(n => <span key={n} className={`${styles.guestName} ${styles.guestKid}`}>{n}</span>)}
          </div>
        </div>
      </section>

      {/* ══ RSVP ══════════════════════════════════════════════════════════ */}
      <section id="rsvp" ref={reg('rsvp')} className={`${styles.section} ${cls('rsvp')}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.ornLine}/>
          <h2 className={styles.sectionTitle}>RSVP</h2>
          <span className={styles.ornLine}/>
        </div>
        <p className={styles.rsvpNote}>Kindly respond by <strong>April 4th</strong></p>

        <div className={styles.rsvpForm}>
            <input
              className={styles.rsvpInput}
              placeholder="Your name..."
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <div className={styles.rsvpChoices}>
              <button
                className={`${styles.choiceBtn} ${going === 'yes' ? styles.choiceYes : ''}`}
                onClick={() => setGoing('yes')}
              >✦ Count Me In</button>
              <button
                className={`${styles.choiceBtn} ${going === 'no' ? styles.choiceNo : ''}`}
                onClick={() => setGoing('no')}
              >✗ Can't Make It</button>
            </div>
            <button
              className={styles.sendBtn}
              disabled={!name || !going}
              onClick={handleRSVP}
            >
              💬 Send via WhatsApp
            </button>
          </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════════════════ */}
      <footer className={styles.footer}>
        <div className={styles.ornamentTop}>
          <span className={styles.ornLine}/>
          <span className={styles.ornDiamond}>◆</span>
          <span className={styles.ornLine}/>
        </div>
        <p className={styles.footerText}>
          Premium Quality · Limited Edition · Aged to Perfection
        </p>
        <p className={styles.footerSub}>April 18th · Elk Grove, CA</p>
      </footer>

      {/* ══ FLOATING MUSIC PLAYER ═════════════════════════════════════════ */}
      <div className={styles.musicWidget}>
        <button className={styles.musicBtn} onClick={() => setMusic(o => !o)}>
          {music ? '✕' : '♫'}
        </button>
        {music && (
          <div className={styles.musicPanel}>
            <p className={styles.musicTitle}>♫ Party Vibes</p>
            <iframe
              width="100%"
              height="140"
              src={`https://www.youtube.com/embed/${YT_VIDEO}?autoplay=1&loop=1&playlist=${YT_VIDEO}`}
              title="Birthday Music"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <p className={styles.musicHint}>
              To change the song, swap the ID in <code>YT_VIDEO</code> inside <code>page.js</code>
            </p>
          </div>
        )}
      </div>

    </main>
  );
}
