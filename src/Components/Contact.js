import React from 'react'

export const Contact = () => {
  return (
    <>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-dark-subtle">
              <div className="card-body">
                <h2>Java</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  architecto tempore adipisci deserunt exercitationem esse
                  cumque, minus repellendus, omnis soluta officiis aliquid quo
                  animi nam.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-lg btn-outline-dark">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-primary-subtle">
              <div className="card-header">
                <h2>Python</h2>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  architecto tempore adipisci deserunt exercitationem esse
                  cumque, minus repellendus, omnis soluta officiis aliquid quo
                  animi nam.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-lg btn-outline-dark">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-warning-subtle">
              <div className="card-body">
                <h2 className="card-title">C++</h2>
                <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  architecto tempore adipisci deserunt exercitationem esse
                  cumque, minus repellendus, omnis soluta officiis aliquid quo
                  animi nam.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-lg btn-outline-dark">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO42s9SxE_jCzuCfs6Ii67nuFyCBeKrr8n1QSkoeVImpEX1BSim66d1qudr9mo_Ikc868&usqp=CAU"
                alt="Error"
              />
              <div className="card-header">
                <h3>C</h3>
              </div>
              <div className="card-text">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  architecto tempore adipisci deserunt exercitationem esse
                  cumque, minus repellendus, omnis soluta officiis aliquid quo
                  animi nam.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-outline-dark">Get more</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
              src="data:image/png;base64,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"
              alt="Error"
            />
            <div className="card-header">
              <h3>React</h3>
            </div>
            <div className="card-text">
              <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  architecto tempore adipisci deserunt exercitationem esse
                  cumque, minus repellendus, omnis soluta officiis aliquid quo
                  animi nam.
              </p>
            </div>
            <div className="card-footer">
              <button class="btn btn-outline-dark">Get more</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="data:image/png;base64,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"
              alt="Error"
            />
            <div className="card-header">
              <h3>Javascript</h3>
            </div>
            <div className="card-text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                magni accusamus hic suscipit quis laborum, molestias
                laudantium quae vero voluptas.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-dark">Get more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Contact