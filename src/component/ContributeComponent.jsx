import React, { useState } from "react";
import { prepareContractCall } from "thirdweb";
import { ethers } from "ethers";
import { useSendTransaction } from "thirdweb/react";
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap"; // Import Bootstrap components

export default function ContributeComponent({ contract }) {
  const [projectId, setProjectId] = useState("");
  const [amount, setAmount] = useState("");
  const { mutate: sendTransaction, isLoading } = useSendTransaction();

  const handleProjectIdChange = (event) => {
    setProjectId(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async () => {
    if (!projectId || !amount) {
      alert("Please enter both Project ID and Amount");
      return;
    }

    // Prepare the transaction
    const transaction = prepareContractCall({
      contract,
      method: "contribute(uint256 _projectId) payable", // Replace with your actual function name
      params: [projectId],
      value: ethers.utils.parseUnits(amount, "ether"), // Convert amount to wei
    });

    // Send the transaction
    await sendTransaction(transaction);
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Contribute to a Project</h1>

      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="projectId">
                  <Form.Label>Project ID</Form.Label>
                  <Form.Control
                    type="number"
                    value={projectId}
                    onChange={handleProjectIdChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount (ETH)</Form.Label>
                  <Form.Control
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={isLoading}>
                  Contribute {isLoading && " (Sending)"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}