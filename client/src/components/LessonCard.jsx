import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { BsCalendarDate } from "react-icons/bs";
import { TfiTime } from "react-icons/tfi";
import { IoMdPeople } from "react-icons/io";
import "./lessonCard.css";
import EditLessonModal from "./EditLessonModal";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { Form, Col, Row, FormGroup, Label, Input } from "reactstrap";

const LessonCard = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [lessonDetails, setLessonDetails] = useState({
    date: "04.04.23",
    slot: "8 - 8.40am",
    class: "1A",
    subject: "Math",
    topic: "Odd numbers",
    objectives: "Learn arithmetic with odd numbers.",
    classwork: "Book pg. 24-29",
    homework: "Book pg. 30-32",
    notes: "Please review even numbers.",
    link: "google.com",
  });

  const handleEdit = () => {
    setShowEditModal(true);
  };
  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setShowDeleteModal(false);
    //delete
  };

  return (
    <>
      <div className="lesson-card">
        <div className="lesson-header">
          <div className="title-container">
            <h2>{lessonDetails.subject}</h2>
          </div>
          <div className="buttons-container">
            <button
              className="edit-delete-buttons delete-button"
              onClick={handleDelete}
            >
              <TiDeleteOutline />
            </button>

            {/* Delete Modal  */}

            <MDBModal
              show={showDeleteModal}
              setShow={setShowDeleteModal}
              tabIndex="-1"
            >
              <MDBModalDialog centered>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle>Delete lesson</MDBModalTitle>
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={() => setShowDeleteModal(false)}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    Once you delete the lesson you won't be able to restore it.
                    Are you sure you want to delete this lesson?
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn
                      color="secondary"
                      onClick={() => setShowDeleteModal(false)}
                    >
                      Cancel
                    </MDBBtn>
                    <MDBBtn color="danger" onClick={handleDeleteConfirm}>
                      Delete
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
            <button className="edit-delete-buttons" onClick={handleEdit}>
              <EditLessonModal />
            </button>
          </div>
        </div>
        <hr />

        {/* Card body  */}

        <Form>
          <Row>
            <FormGroup row>
              <Label for="date" sm={1} className="lesson-card-icon">
                <BsCalendarDate />
              </Label>
              <Col sm={3} className="date-input">
                <Input
                  className="lesson-card-input"
                  id="date"
                  name="date"
                  type="text"
                  value={lessonDetails.date}
                />
              </Col>
              <Label for="date" sm={1} className="lesson-card-icon">
                <TfiTime />
              </Label>
              <Col sm={3} className="date-input">
                <Input
                  className="lesson-card-input"
                  id="slot"
                  name="slot"
                  type="text"
                  value={lessonDetails.slot}
                />
              </Col>
              <Label for="date" sm={1} className="lesson-card-icon">
                <IoMdPeople />
              </Label>
              <Col sm={3} className="date-input">
                <Input
                  className="lesson-card-input"
                  id="class"
                  name="class"
                  type="text"
                  value={lessonDetails.class}
                />
              </Col>
            </FormGroup>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="topic" className="lesson-card-label">
                  Topic
                </Label>
                <Input
                  className="lesson-card-input"
                  id="topic"
                  name="topic"
                  type="text"
                  value={lessonDetails.topic}
                  disabled
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="link" className="lesson-card-label">
                  Classroom link
                </Label>
                <Input
                  className="lesson-card-input"
                  id="link"
                  name="link"
                  type="url"
                  value={lessonDetails.link}
                  disabled
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="objectives" className="lesson-card-label">
              Objectives
            </Label>
            <Input
              id="objectives"
              name="objectives"
              type="text"
              className="lesson-card-input"
              value={lessonDetails.objectives}
              disabled
            />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="classwork" className="lesson-card-label">
                  Classwork
                </Label>
                <Input
                  className="lesson-card-input"
                  id="classwork"
                  name="classwork"
                  type="url"
                  value={lessonDetails.classwork}
                  disabled
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="homework" className="lesson-card-label">
                  Homework
                </Label>
                <Input
                  id="homework"
                  name="homework"
                  className="lesson-card-input"
                  value={lessonDetails.homework}
                  type="url"
                  disabled
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="notes" className="lesson-card-label">
              Notes
            </Label>
            <Input
              id="notes"
              name="notes"
              type="text"
              className="lesson-card-input"
              value={lessonDetails.notes}
              disabled
            />
          </FormGroup>
        </Form>
      </div>
    </>
  );
};

export default LessonCard;
