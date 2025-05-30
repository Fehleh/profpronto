
import Head from 'next/head'
import Header from '../components/Header'
import '../styles/global.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>ProfPronto</title>
        <meta name="description" content="Atividades adaptadas e prontas para imprimir." />
      </Head>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Bem-vindo ao ProfPronto!</h1>
        <p>Aqui você encontra atividades adaptadas e lúdicas para alunos com dificuldade de aprendizagem, prontas para serem aplicadas em sala de aula.</p>
      </main>
    </>
  )
}
