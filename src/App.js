import styles from './App.module.scss';
import { ReactComponent as Gcloud } from './svg/Logo/gcloud.svg';
import { ReactComponent as Gotbit } from './svg/Logo/gotbit.svg';
import { ReactComponent as Kolib } from './svg/Logo/kolibrio.svg';
import { ReactComponent as Nansen } from './svg/Logo/nansen.svg';
import { ReactComponent as Panswap } from './svg/Logo/pancakeswap.svg';
import { ReactComponent as Peanut } from './svg/Logo/peanut.svg';
import { ReactComponent as Polyg } from './svg/Logo/polyg.svg';
import { ReactComponent as RPClogo } from './svg/Logo/RPClogo.svg';
import { ReactComponent as Velas } from './svg/Logo/velas.svg';
import { ReactComponent as Zks } from './svg/Logo/zksync.svg';
import { ReactComponent as Vault } from './svg/openvault.svg';
import { ReactComponent as VecD } from './svg/VectorD.svg';

export default function App() {
  return (
    <div className={styles.App}>
      <a href="/">
        <RPClogo />
      </a>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                Web3 API
                <VecD />
              </li>
              <li>
                <a href="/">Dedicated Nodes</a>
              </li>
              <li>
                Enterprise
                <VecD />
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Docs</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
            </ul>
          </nav>
          <ul>
            <li>
              <a href="/">Log in</a>
            </li>
            <li>
              <a href="/">Try it for free</a>
            </li>
          </ul>
        </header>
      </div>
      <main>
        <section>
          <div>
            <h1>
              The <span>fastest</span>
              <span> geo-distributed</span>
              <span> high-available</span> blockchain nodes
            </h1>
            <p>
              Get all the advantages of blockchain API on your own secure
              environment
            </p>
            <div>
              <a href="/">Contact Us</a>
              <a href="/">Quick chat on Telegram</a>
            </div>
            <div>
              <Vault />
            </div>
            <div>
              <h2>
                We are the premium node provider trusted by industry leaders
              </h2>
              <div>
                <Gcloud />
                <Polyg />
                <Panswap />
                <Zks />
                <Nansen />
                <Velas />
                <img src="/img/blockChETL.png" alt="BlockChainETL Logo" />
                <Peanut />
                <Gotbit />
                <Kolib />
              </div>
            </div>
          </div>
        </section>
        <section>1</section>
        <section>1</section>
        <section>1</section>
        <section>1</section>
        <section>1</section>
        <section>1</section>
        <section>1</section>
        <section>1</section>
        <section>1</section>
      </main>
    </div>
  );
}
