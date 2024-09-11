import logo from "../src/assets/images/logo.svg";
import illustrationIntro from "../src/assets/images/illustration-intro.svg";

function App() {
  return (
    <>
      <header className="primary-header">
        <div className="container">
          <a href="#">
            <img src={logo} alt="Manage" />
          </a>
          <nav className="primary-navigation">
            <ul className="nav-list" role="list">
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </nav>
          <button className="button">Get Started</button>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="even-columns">
              <div>
                <h1 className="fs-primary-heading fw-bold">
                  Bring everyone together to build better products.
                </h1>
                <p>
                  Manage makes it simple for software teams to play day-to-day
                  tasks while keeping the larger team goals in view.
                </p>
                <button className="button">Get Started</button>
              </div>
              <div>
                <img src={illustrationIntro} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="even-colums">
              <div>
                <h2 className="fs-secondary-heading fw-bold">
                  What's different about Manage?
                </h2>
                <p>
                  Manage provides all the functionality your team needs, without
                  the complexity. Our software is tailor-made for modern digital
                  product teams.
                </p>
              </div>
              <div>
                <ul role="list" className="numbered-items">
                  <li>
                    <h3 className="fs-600 fw-bold">
                      Track company-wide progress
                    </h3>
                    <p>
                      See how your day-to-day tasks fir into the wider vision.Go
                      from tracking progress at milestone level all the way done
                      to the smallest of details. Never lose sight of the bigger
                      picture again.
                    </p>
                  </li>
                  <li>
                    <h3 className="fs-600 fw-bold">
                      Advanced built-in reports
                    </h3>
                    <p>
                      Set interval delivery estimates and track progress toward
                      the company goals. Our customisable dashboard helps you
                      build out the reports you need to keep key stakholders
                      informed.
                    </p>
                  </li>
                  <li>
                    <h3 className="fs-600 fw-bold">
                      Everything you need in one place
                    </h3>
                    <p>
                      Stop jumping from one service to another to communicate,
                      store files, track tasks and share documents. Manage
                      offers an all-in-one team productivity solution.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="carousel">
          <h2 className="fs-secondary-heading">What they've said</h2>
          {/* carousel here  */}
          <button className="button">Get Started</button>
        </section>

        <section className="cta | bg-accent-400 text-neutral-100">
          <div className="container">
            <div className="even-columns">
              <div>
                <p className="fs-secondary-heading fw-bold">
                  Simplify how your team works today.
                </p>
              </div>
              <div>
                <button className="button" datatype="inverted">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-900 text-neutral-100">
        <div className="container">
          <div className="even-columns">
            <div>
              <a href="#">
                <img src={logo} alt="Manage" />
              </a>
              <ul role="list" aria-label="social links">
                <li>
                  <a aria-label="facebook" href="#"></a>
                </li>
                <li>
                  <a aria-label="youtube" href="#"></a>
                </li>
                <li>
                  <a aria-label="twitter" href="#"></a>
                </li>
                <li>
                  <a aria-label="pintrest" href="#"></a>
                </li>
                <li>
                  <a aria-label="instagram" href="#"></a>
                </li>
              </ul>
            </div>
            <div>
              <nav className="footer-nav">
                <ul role="list" aria-label="Footer">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <form action="">
                <input type="email" />
                <button className="button">Go</button>
                <p>Copyright 2020. All Rights Reserved</p>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
