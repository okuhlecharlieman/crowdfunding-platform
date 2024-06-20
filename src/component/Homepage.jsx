import React from 'react';

function HomePage() {
  return (
    <div className="container mt-4">
      <section className="row">
        <div className="col-md-6">
          <h2 className="mb-3">What is it?</h2>
          <p>
            This platform is a decentralized crowdfunding application built on the blockchain. It allows project creators to raise funds from a global community of supporters in a transparent and secure way.
          </p>
          <ul className="list-group">
            <li className="list-group-item"><strong>Transparency:</strong> All project details and transactions are recorded on the blockchain, making them publicly auditable.</li>
            <li className="list-group-item"><strong>Security:</strong> Blockchain technology ensures the integrity and immutability of data, preventing fraud and manipulation.</li>
            <li className="list-group-item"><strong>Accessibility:</strong> Anyone with an internet connection can participate, regardless of their location or financial background.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src="https://via.placeholder.com/600x400.png?text=Crowdfunding+Platform" className="img-fluid rounded" alt="Crowdfunding Platform" />
        </div>
      </section>

      <section className="mt-5">
        <h2 className="mb-3">Features</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Create Projects</h5>
                <p className="card-text">Easily create and launch your crowdfunding campaigns with detailed project descriptions and funding goals.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Contribute to Projects</h5>
                <p className="card-text">Support projects you believe in by contributing funds directly to the project wallet.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Track Progress</h5>
                <p className="card-text">Monitor the progress of your funded projects and see how your contributions are being used.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <h2 className="mb-3">Get Started</h2>
        <p>
          Ready to join the decentralized crowdfunding revolution? 
          <a href="/create" className="btn btn-primary">Create a Project</a>
          <a href="/projects" className="btn btn-secondary">Explore Projects</a>
        </p>
      </section>
    </div>
  );
}

export default HomePage;