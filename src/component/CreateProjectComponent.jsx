import React, { useState } from "react";
import { prepareContractCall } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap"; // Import Bootstrap components

export default function CreateProjectComponent({ contract }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [deadline, setDeadline] = useState("");
  const { mutate: sendTransaction, isLoading } = useSendTransaction();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };

  const handleSubmit = async () => {
    if (!title || !description || !goal || !deadline) {
      alert("Please fill in all fields");
      return;
    }

    // Prepare the transaction
    const transaction = prepareContractCall({
      contract,
      method: "createProject(string _title, string _description, uint256 _goal, uint256 _deadline)",
      params: [title, description, goal, deadline],
    });

    // Send the transaction
    await sendTransaction(transaction);
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Create a New Project</h1>

      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="goal">
                  <Form.Label>Goal (ETH)</Form.Label>
                  <Form.Control
                    type="number"
                    value={goal}
                    onChange={handleGoalChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="deadline">
                  <Form.Label>Deadline (Timestamp)</Form.Label>
                  <Form.Control
                    type="number"
                    value={deadline}
                    onChange={handleDeadlineChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={isLoading}>
                  Create Project {isLoading && " (Creating)"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}