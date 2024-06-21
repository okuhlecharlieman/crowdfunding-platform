import React from "react";
import { useReadContract } from "thirdweb/react";
import { Link } from "react-router-dom"; // Import Link for routing
import { Card, Container, Row, Col } from "react-bootstrap";
import { ethers } from "ethers"; // Import ethers for wei conversion

export default function ProjectsListComponent({ contract }) {
  const { data: projects, isLoading } = useReadContract({
    contract,
    method: "getProjects", // Assuming your contract has a function named "getProjects"
    // This function should return an array of projects
    // Example: `function getProjects() view returns ((string title, string description, uint256 goal, uint256 deadline, address creator, uint256 fundsRaised)[])`
  });

  if (isLoading) {
    return <div>Loading projects...</div>;
  }

  if (!projects) {
    return <div>No projects found.</div>;
  }

  return (
    <Container className="mt-5">
      <h1 className="mb-4">All Projects</h1>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <ul>
                {projects.map((project, index) => (
                  <li key={index}>
                    <Link to={`/projects/${index}`}>
                      <h3>{project.title}</h3>
                    </Link>
                    <p>{project.description}</p>
                    {/* Display other project details as needed */}
                    <p>Goal: {ethers.utils.formatEther(project.goal)} ETH</p>
                    <p>Funds Raised: {ethers.utils.formatEther(project.fundsRaised)} ETH</p>
                    <p>Deadline: {new Date(project.deadline * 1000).toLocaleString()}</p>
                    <p>Creator: {project.creator}</p> {/* Assuming your contract stores the creator address */}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}