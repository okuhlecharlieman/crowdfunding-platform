import React from "react";
import { useParams } from "react-router-dom";
import { useReadContract } from "thirdweb/react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { ethers } from "ethers"; // Import ethers for wei conversion

export default function ProjectDetailsComponent({ contract }) {
  const { projectId } = useParams(); // Get the projectId from the URL

  const { data: project, isLoading } = useReadContract({
    contract,
    method: "projects", // Assuming your contract has a function named "projects"
    // This function should return the details of a single project based on the projectId
    // Example: `function projects(uint256 _projectId) view returns (string title, string description, uint256 goal, uint256 deadline, address creator, uint256 fundsRaised)`
    params: [projectId], // Pass the projectId as a parameter
  });

  if (isLoading) {
    return <div>Loading project details...</div>;
  }

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <Container className="mt-5">
      <h1 className="mb-4">{project.title}</h1>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <p>{project.description}</p>
              <p>Goal: {ethers.utils.formatEther(project.goal)} ETH</p>
              <p>Funds Raised: {ethers.utils.formatEther(project.fundsRaised)} ETH</p>
              <p>Deadline: {new Date(project.deadline * 1000).toLocaleString()}</p>
              <p>Creator: {project.creator}</p> {/* Assuming your contract stores the creator address */}
              {/* Display other project details as needed */}
              {/* Example: Display a list of contributors */}
              <h2>Contributors</h2>
              <ul>
                {/* Assuming your contract has a function to get contributors */}
                {/* Replace 'getContributors' with the actual function name */}
                {project.contributors.map((contributor, index) => (
                  <li key={index}>
                    <p>Address: {contributor}</p>
                    <p>Amount: {ethers.utils.formatEther(project.contributions[index])} ETH</p>
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