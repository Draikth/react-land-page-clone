import styles from './App.module.scss';
import { ReactComponent as Eye } from './svg/eye.svg';
import { ReactComponent as Lock } from './svg/lock.svg';
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
import { ReactComponent as Rabbit } from './svg/Rabbit.svg';
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
        <section>
          <div>
            <h1>
              Why our RPC nodes outperform traditional blockchain API providers
            </h1>
            <div>
              <div>5x Cost Reduction</div>
              <div>
                Compared to the 3rd party providers. Pay only for the node. No
                scaling bills
              </div>
            </div>
            <div>
              <div>Ultra Speed</div>
              <div>RPC Response Time Under 4 ms</div>
            </div>
            <div>
              <div>100% Healthy Nodes</div>
              <div>Auto-recovery and traffic balancing for healthy nodes</div>
            </div>
            <div>
              <div>AI-based Auto-scaling</div>
              <div>
                Our AI model predicts traffic and scales infrastructure
                automatically
              </div>
            </div>
            <div>
              <div>Smart Caching</div>
              <div>Peak performance and resource optimization</div>
            </div>
            <div>
              <div>Maximum Security</div>
              <div>
                Software-defined perimeter Firewall Security policy Auto-updated
                software
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1>
              99,9% <br /> uptime
            </h1>
            <h2>
              Uninterrupted availability for optimal user experience and
              exceptional customer support
            </h2>
          </div>
        </section>
        <section>
          <div>
            <h2>
              Boost your Web3 project with our node infrastructure solutions
            </h2>
            <div>
              <div>
                <Rabbit />
              </div>
              <h3>Dedicated Nodes</h3>
              <p>
                For middle-sized projects that demand dedicated resources for
                peak performance and scalability.
              </p>
              <a href="/">Learn more</a>
            </div>
            <div>
              <div>
                <Lock />
              </div>
              <h3>Dedicated Node Cluster</h3>
              <p>
                For high volume operations with the lowest latency, customized,
                global self-hosted infrastructure
              </p>
              <a href="/">Learn more</a>
            </div>
            <div>
              <div>
                <Eye />
              </div>
              <h3>MEV Infrastructure</h3>
              <p>
                Optimized MEV-solution for high-frequency exchanges: includes
                Self-hosted nodes, Mempool data, and Transaction simulator
              </p>
              <a href="/">Learn more</a>
            </div>
          </div>
        </section>
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
