import Head from "next/head";
import { Container } from "react-bootstrap";
import Dashboard from "../components/Dashboard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Noundles Dashboard - Rainbows Balance</title>
        <meta name="description" content="Noundles Dashboard - Rainbows Balance" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌈</text></svg>"
        />
      </Head>
      <main>
        <Container>
          <h1>Noundles Dashboard</h1>
          <hr />
          <Dashboard />
        </Container>
      </main>
      <footer>
        <Container>
          <small>
            made by{" "}
            <a href="https://twitter.com/wakemi18" target="_blank" rel="noreferrer">
              @wkm
            </a>
          </small>
        </Container>
      </footer>
    </div>
  );
}
