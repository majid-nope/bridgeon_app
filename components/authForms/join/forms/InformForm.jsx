import { OutlinedInput, FormControl } from "@mui/material";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { setValidation } from "../../../../utils/validation/formValidation";

const InformForm = ({ forwardFieldData }) => {
  const [fieldsData, setFieldsData] = useState(setValidation.joinValidation);
  // event fire on field changes
  const onFieldChange = (event, index) => {
    setFieldsData(() =>
      fieldsData.map(
        (el, fieldIndex) =>
          fieldIndex == index ? { ...el, value: event.target.value } : el // assigning values by checking their index
      )
    );
    // forward data to mother components
    forwardFieldData(fieldsData);
  };

  return (
    <div style={{ width: "100%" }}>
      <Container
        className="d-flex gap-5 flex-column flex-shrink-0"
        style={{ width: "85vw" }}
      >
        <Row gap={5}>
          {fieldsData.map((field, index) => (
            <Col
              key={index}
              md={4}
              sm={12}
              className="d-flex justify-content-center mt-4"
            >
              <FormControl sx={{ width: "80%" }}>
                <OutlinedInput
                  onChange={(e) => onFieldChange(e, index)}
                  sx={{ color: "white", border: "1px solid gray" }}
                  placeholder={field.placeholder}
                />
              </FormControl>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default InformForm;
