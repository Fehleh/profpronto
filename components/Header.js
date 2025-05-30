
import Image from 'next/image'

export default function Header() {
  return (
    <header style={{
      background: '#f97316',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      color: '#fff'
    }}>
      <Image src="/logo.png" alt="ProfPronto Logo" width={50} height={50} />
      <h2>ProfPronto.com.br</h2>
    </header>
  )
}
