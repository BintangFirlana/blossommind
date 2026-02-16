export default function Home() {
  return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          🌸 BlossomMind
        </h1>
        <p style={{ fontSize: '1.2rem' }}>
          Taman Kesehatan Mentalmu
        </p>
        <p style={{ marginTop: '2rem', opacity: 0.8 }}>
          Website sedang dalam pengembangan 🚀
        </p>
      </div>
  );
}