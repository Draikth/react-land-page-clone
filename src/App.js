import styles from './App.module.scss';
import { ReactComponent as Excl } from './svg/exclude.svg';
import { ReactComponent as Extarw } from './svg/extlnk.svg';
import { ReactComponent as Eye } from './svg/eye.svg';
import { ReactComponent as Incl } from './svg/include.svg';
import { ReactComponent as Arb } from './svg/Lg/arblg.svg';
import { ReactComponent as Avalanche } from './svg/Lg/avalanchelg.svg';
import { ReactComponent as Bnb } from './svg/Lg/bnblg.svg';
import { ReactComponent as Cardano } from './svg/Lg/cardanolg.svg';
import { ReactComponent as Chain } from './svg/Lg/chainstacklg.svg';
import { ReactComponent as Clutch } from './svg/Lg/clutchlg.svg';
import { ReactComponent as Cronos } from './svg/Lg/cronoslg.svg';
import { ReactComponent as Ether } from './svg/Lg/ethlg.svg';
import { ReactComponent as Fantom } from './svg/Lg/fantomlg.svg';
import { ReactComponent as GetB } from './svg/Lg/GetBlocklg.svg';
import { ReactComponent as Klay } from './svg/Lg/klaytnlg.svg';
import { ReactComponent as Opt } from './svg/Lg/optimismlg.svg';
import { ReactComponent as Poly } from './svg/Lg/plylg.svg';
import { ReactComponent as Polka } from './svg/Lg/polkalg.svg';
import { ReactComponent as Qn } from './svg/Lg/QuickNodelg.svg';
import { ReactComponent as Tron } from './svg/Lg/tronlg.svg';
import { ReactComponent as Vel } from './svg/Lg/velaslg.svg';
import { ReactComponent as Lock } from './svg/lock.svg';
import { ReactComponent as Gcloud } from './svg/Logo/gcloud.svg';
import { ReactComponent as Gotbit } from './svg/Logo/gotbit.svg';
import { ReactComponent as Kolib } from './svg/Logo/kolibrio.svg';
import { ReactComponent as Nansen } from './svg/Logo/nansen.svg';
import { ReactComponent as Panswap } from './svg/Logo/pancakeswap.svg';
import { ReactComponent as Peanut } from './svg/Logo/peanut.svg';
import { ReactComponent as Polyg } from './svg/Logo/polyg.svg';
import { ReactComponent as RPCcon } from './svg/Logo/RPCcontrast.svg';
import { ReactComponent as RPClogo } from './svg/Logo/RPClogo.svg';
import { ReactComponent as Velas } from './svg/Logo/velas.svg';
import { ReactComponent as Zks } from './svg/Logo/zksync.svg';
import { ReactComponent as Vault } from './svg/openvault.svg';
import { ReactComponent as Rabbit } from './svg/Rabbit.svg';
import { ReactComponent as VecD } from './svg/VectorD.svg';

export default function App() {
  return (
    <div className={styles.App}>
      <div>
        <header className={styles.header}>
          <a href="/">
            <RPClogo />
          </a>
          <nav className={styles.navList}>
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

              <li>
                <a href="/" className={styles.buttonBorder}>
                  Log in
                </a>
              </li>
              <li>
                <a href="/" className={styles.buttonFill}>
                  Try it for free
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <main>
        <section className={styles.sect1}>
          <div>
            <div className={styles.s1Grid}>
              <div>
                <div>
                  <h1 className={styles.spanH}>
                    The <span className={styles.spOne}>fastest</span>
                    <span className={styles.spTwo}> geo-distributed</span>
                    <span className={styles.spThree}> high-available</span>
                    blockchain nodes
                  </h1>
                </div>
                <div>
                  <h2 className={styles.s1GH2}>
                    Get all the advantages of blockchain API on your own secure
                    environment
                  </h2>
                </div>
                <div className={styles.s1Buttons}>
                  <a href="/" className={styles.buttonFill}>
                    Contact Us
                  </a>
                  <a href="/" className={styles.buttonBorder}>
                    Quick chat on Telegram
                  </a>
                </div>
              </div>
              <div>
                <Vault />
              </div>
            </div>
            <div>
              <h2 className={styles.s1UnderGrid}>
                We are the premium node provider <br /> trusted by industry
                leaders
              </h2>
              <div className={styles.logoGrid}>
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
            <div>
              <h2 className={styles.tableH2}>
                Leave the node infrastructure challenges to us
              </h2>
              <div className={styles.tableContainer}>
                <div className={styles.tableGrid}>
                  <div className={styles.tableCell} />
                  <div className={styles.tableCell}>
                    <RPClogo />
                  </div>
                  <div className={styles.tableCell}>
                    <Qn /> Quicknode
                  </div>
                  <div className={styles.tableCell}>
                    <Chain /> Chainstack
                  </div>
                  <div className={styles.tableCell}>
                    <GetB /> GetBlock
                  </div>

                  <div className={styles.tableCell}>Hosting provider</div>
                  <div className={styles.tableCell}>Public cloud, on-prem</div>
                  <div className={styles.tableCell}>Public cloud, on-prem</div>
                  <div className={styles.tableCell}>Public cloud, on-prem</div>
                  <div className={styles.tableCell}>
                    Self-hosted infrastructure
                  </div>

                  <div className={styles.tableCell}>Caching</div>
                  <div className={styles.tableCell}>
                    <Incl />
                  </div>
                  <div className={styles.tableCell}>Depends on setup</div>
                  <div className={styles.tableCell}>
                    <Incl />
                  </div>
                  <div className={styles.tableCell}>
                    <Excl />
                  </div>

                  <div className={styles.tableCell}>Real-time monitoring</div>
                  <div className={styles.tableCell}>
                    Yes, tailored to the client
                  </div>
                  <div className={styles.tableCell}>
                    Yes, on the provider's side
                  </div>
                  <div className={styles.tableCell}>
                    Yes, on the provider's side
                  </div>
                  <div className={styles.tableCell}>
                    Yes, on the provider's side
                  </div>

                  <div className={styles.tableCell}>
                    Predictive automatic Autoscaling
                  </div>
                  <div className={styles.tableCell}>
                    <Incl />
                  </div>
                  <div className={styles.tableCell}>
                    <Excl />
                  </div>
                  <div className={styles.tableCell}>
                    <Incl />
                  </div>
                  <div className={styles.tableCell}>
                    <Excl />
                  </div>

                  <div className={styles.tableCell}>
                    Custom Web3 infrastructure solutions
                  </div>
                  <div className={styles.tableCell}>
                    <Incl />
                  </div>
                  <div className={styles.tableCell}>
                    <Excl />
                  </div>
                  <div className={styles.tableCell}>
                    <Excl />
                  </div>
                  <div className={styles.tableCell}>
                    <Excl />
                  </div>

                  <div className={styles.tableCell}>
                    Full-cycle DevOps service
                  </div>
                  <div className={styles.tableCell}>
                    <Incl />
                  </div>
                  <div className={styles.tableCell}>
                    <Excl />
                  </div>
                  <div className={styles.tableCell}>
                    <Excl />
                  </div>
                  <div className={styles.tableCell}>
                    <Excl />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sect2}>
          <div>
            <h2 className={styles.sect2H2}>
              Why our RPC nodes outperform traditional blockchain API providers
            </h2>
            <div className={styles.sect2CardGrid}>
              <div className={styles.card1Vlt}>
                <div className={styles.card1LTxt}>5x Cost Reduction</div>
                <div className={styles.cardRTxt}>
                  Compared to the 3rd party
                  <br /> providers. Pay only for the node. No scaling bills
                </div>
              </div>
              <div className={styles.card2Or}>
                <div className={styles.card2LTxt}>Ultra Speed</div>
                <div className={styles.cardRTxt}>
                  RPC Response Time Under 4 ms
                </div>
              </div>
              <div className={styles.card3Blu}>
                <div className={styles.card3LTxt}>100% Healthy Nodes</div>
                <div className={styles.cardRTxt}>
                  Auto-recovery and traffic balancing for healthy nodes
                </div>
              </div>
              <div className={styles.card4Blk}>
                <div className={styles.card4LTxt}>AI-based Auto-scaling</div>
                <div className={styles.cardRTxt}>
                  Our AI model predicts traffic and scales infrastructure
                  automatically
                </div>
              </div>
              <div className={styles.card2Or}>
                <div className={styles.card2LTxt}>Smart Caching</div>
                <div className={styles.cardRTxt}>
                  Peak performance and resource optimization
                </div>
              </div>
              <div className={styles.card1Vlt}>
                <div className={styles.card1LTxt}>Maximum Security</div>
                <div className={styles.cardRTxt}>
                  Software-defined perimeter
                  <br />
                  Firewall
                  <br />
                  Security policy
                  <br />
                  Auto-updated software
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sect3}>
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
        <section className={styles.sect4}>
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
        <section className={styles.sect5}>
          <div>
            <div>
              <h2>
                Let's speak as developers to developers on how you can create
                your own blockchain infrastructure and significantly reduce
                costs
              </h2>
            </div>
            <div>
              <img src="/img/fndrphoto.png" alt="founder" />
              <p>
                Daniel Yavorovych
                <br />
                Co-Founder & CTO at RPC Fast
              </p>
              <a href="/">Contact Us</a>
              <a href="/">Quick chat on Telegram</a>
            </div>
          </div>
        </section>
        <section className={styles.sect6}>
          <h2>Ultra-fast nodes for any blockchain</h2>
          <div>
            <Ether />
            Etherium
          </div>
          <div>
            <Bnb />
            BNB Chain
          </div>
          <div>
            <Poly /> Polygon
          </div>
          <div>
            <Arb />
            Arbitrum
          </div>
          <div>
            <Polka />
            Polkadot
          </div>
          <div>
            <Avalanche />
            Avalanche
          </div>
          <div>
            <Cardano />
            Cardano
          </div>
          <div>
            <Vel />
            Velas
          </div>
          <div>
            <Klay />
            Klaytn
          </div>
          <div>
            <Tron />
            Tron
          </div>
          <div>
            <Cronos />
            Cronos
          </div>
          <div>
            <Opt />
            Optimism
          </div>
          <div>
            <Fantom />
            Fantom
          </div>
          <p>
            We support up to 85 blockchains.
            <br />
            Please contact us if your required chains are missing in this list
          </p>
        </section>
        <section className={styles.sect7}>
          <div>
            <div>
              <h2>Pricing is as easy as what SaaS does</h2>
            </div>
            <div>
              <ul>
                <li>A fixed price for maintenance is included</li>
                <li>Scale to infinity while paying for cloud resources only</li>
                <li>
                  We know how to cut costs by an average of 40% and optimize the
                  TCO
                </li>
              </ul>
            </div>
            <h2>
              Find your best-matching service pack comparing our node services
            </h2>
            <div>
              <h3>Shared Nodes</h3>
              <p>For startups and SME projects</p>
              <h2>$0 - $1000</h2>
              <ul>
                <li>Natural latency</li>
                <li>Standard security</li>
                <li>Limited performance</li>
                <li>Costs depend on traffic</li>
              </ul>
            </div>
            <div>
              <h3>Dedicated Nodes</h3>
              <p>For middle-sized projects</p>
              <h2>From $450 *From $1500 for Solana</h2>
              <ul>
                <li>Guaranteed resources</li>
                <li>High security</li>
                <li>Transaction simulation</li>
                <li>High customization</li>
                <li>24/7 dedicated support</li>
              </ul>
            </div>
            <div>
              <h3>Nodes Cluster</h3>
              <p>For large enterprise projects</p>
              <h2>From $2000</h2>
              <ul>
                <li>Ai-based autoscaling for better UX and reduced costs</li>
                <li>Advanced MEV tools</li>
                <li>Multi-regional deployment for optimized response time</li>
                <li>High customization</li>
                <li>24/7 dedicated support</li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.sect8}>
          <div>
            <h2>
              A bespoke solution created by
              <a href="/">
                Dysnix <Extarw />
              </a>
            </h2>
            <img src="/img/clutchaward.png" alt="clutch award" />
            <div>
              8 years of on-hand experience in Kubernetes and blockchain
            </div>
            <div>
              We're handling projects with a load of 1.5 million requests per
              day
            </div>
            <div>Our team provides top-notch services for 99.9% of SLA</div>
            <div>
              <div>
                <img src="/img/roman.png" alt="Roman" />
                <hgroup>
                  <h5>Roman Cherednik, Velas</h5>
                  <p>Development for Financial Services Company</p>
                </hgroup>
                <a href="/">
                  <Clutch />
                  See on Clutch
                </a>
                <p>
                  Thanks to the efforts of the Dysnix team, the company was able
                  to attract the attention of the general public. The currency
                  is stable while maintaining the necessary flexibility with the
                  support of experts in the industry. The team has proven itself
                  to be a reliable long-term partner.
                </p>
              </div>
              <div>
                <img src="/img/dmytro.png" alt="Dmytro" />
                <hgroup>
                  <h5>Dmytro Haidashenko, Shelf Network</h5>
                  <p>Infrastructure Maintenance for Vehicle Trading Network</p>
                </hgroup>
                <a href="/">
                  <Clutch />
                  See on Clutch
                </a>
                <p>
                  In the first stage of their optimization plan alone, Dysnix
                  managed to reduce infrastructure costs by 25%. They provide
                  remarkable response times, which allows them to react to
                  unforeseen situations. This makes them ideal for handling
                  urgent tasks.Roman Cherednik, Velas
                </p>
              </div>
              <div>
                <img src="/img/alexG.png" alt="Alex G" />
                <hgroup>
                  <h5>Alex Gluchowski, Matter Labs</h5>
                  <p>zkSync Solution for IT Company</p>
                </hgroup>
                <a href="/">
                  <Clutch />
                  See on Clutch
                </a>
                <p>
                  Dysnix contributed to the successful release of the company's
                  product. They performed a custom auto-scaling solution to
                  reduce the project's costs. The company now has the
                  opportunity to earn a higher income and at the same time
                  increase its likeability with speed and security as main
                  offers.
                </p>
              </div>
              <div>
                <img src="/img/alexM.png" alt="Alex M" />
                <hgroup>
                  <h5>Alex Momot, Remme</h5>
                  <p>Custom Software Dev for Cybersecurity Company</p>
                </hgroup>
                <a href="/">
                  <Clutch />
                  See on Clutch
                </a>
                <p>
                  Dysnix provided a team of Blockchain experts that was always
                  available to assist the client. They finished a product that
                  presented new features in the company's digital asset
                  exchange. As a result, the company now considers their deep
                  involvement as an extension of their own team.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sect9}>
          <div>
            <h2>Frequently Asked Questions: Basic Knowledge to Remind</h2>
            <div>
              <h4>What are blockchain nodes?</h4>
              <p>
                Nodes are the “knots” of the blockchain systems interconnected
                to create the distributed network and secure it. One node can be
                launched on one separate device or be a part of the
                software-hardware complex where the node is allocated alongside
                others. There are a lot of types of nodes: Web3 industry has
                light nodes, archival nodes, mining nodes, masternodes, and
                others. Each has its own specialization in transferring
                information through the network.
              </p>
            </div>
            <div>
              <h4>How do nodes work?</h4>
              <p>
                Depending on the type of node, each node has its own functions,
                states, and work procedures. But all-in-all, even blockchain
                nodes for sale exist to validate transactions and store the
                information about transactions. Nodes are unique tools of
                distributed systems as each of them stores the whole information
                about their network. With each new transaction in the
                blockchain, all nodes are updating at the same time to keep
                their information fresh.
              </p>
            </div>
            <div>
              <h4>What is a blockchain API?</h4>
              <p>
                Any blockchain Application Programming Interface (API) is a
                developer's tool to get access to the functionality of
                blockchain and implement it into any other project. Depending on
                the API itself, the access might be direct or limited with some
                kind of service interface that's built upon the API. RPC Fast is
                the fastest API-based node-as-a-service blockchain industry
                deserves.
              </p>
            </div>
            <div>
              <h4>How do I get blockchain API?</h4>
              <p>
                The best way to get the API for your needs is to read the
                documentation of the dedicated blockchain. There are lots of
                APIs available for different needs: Websockets, Rest APIs,
                Payment Processing APIs, Simple Query APIs, Blockchain Data API,
                and so on. RPC Fast, as nodes as a service, provides you with
                all the functionality of the selected network with the help of a
                blockchain API. Thus you can simply connect it with your
                project.
              </p>
            </div>
            <div>
              <h4>What is blockchain architecture?</h4>
              <p>
                This type of architecture is a distributed network that keeps
                the data about all events that happened inside each node that
                participates in it. With such distributed architecture, the
                environment is pretty secure yet transparent and trustable. This
                technology is often applied for financial tools, but it's gone
                far beyond in other industries now.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.sect10}>
          <div>
            <div>
              <a href="/">
                <RPCcon />
              </a>
            </div>
            <div>
              <h3>Available blockchains</h3>
              <ul>
                <li>
                  <a href="/">Ethereum API</a>
                  <a href="/">Binance Smart Chain API</a>
                  <a href="/">Polygon API</a>
                  <a href="/">Velas API</a>
                  <a href="/">Mempool blockchain API</a>
                  <a href="/">Mempool BNB API</a>
                  <a href="/">Mempool Polygon API</a>
                  <a href="/">Dedicated Solana Nodes</a>
                  <a href="/">Dedicated BNB Nodes</a>
                  <a href="/">Dedicated ETH Nodes</a>
                  <a href="/">Dedicated Polygon Nodes</a>
                  <a href="/">Dedicated Avalanche Nodes</a>
                  <a href="/">Dedicated Aptos Nodes</a>
                  <a href="/">Dedicated TON Nodes</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="/">Documentation</a>
                  <a href="/">Guides</a>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="/">About us</a>
                  <a href="/">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <div>
            <p>Tallinn, Vesivärava str 50-201, 10152, Estonia</p>
            <a href="/">contact@rpcfast.com</a>
            <a href="/">© RPC Fast API. 2024.</a>
            <a href="/">Privacy policy</a>
            <a href="/">Terms of Use</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
