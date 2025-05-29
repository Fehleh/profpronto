
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>ProfPronto</title>
        <meta name="description" content="Atividades adaptadas e prontas para imprimir." />
      </Head>
      <Header />
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '2rem', color: '#f97316' }}>Bem-vindo ao ProfPronto!</h1>
        <p style={{ fontSize: '1.2rem' }}>Aqui você encontra atividades adaptadas e lúdicas para alunos com dificuldade de aprendizagem, prontas para serem aplicadas em sala de aula.</p>
      </main>
    </>
  )
}
