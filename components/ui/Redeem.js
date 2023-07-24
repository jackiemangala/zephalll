import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { Password } from "./key";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button auto color="primary" shadow onPress={handler}>
        Redeem
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            
            <Text b size={18}>
              Redeem Key
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>

          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Key"
            contentLeft={<Password fill="currentColor" />}
          />
          <Row justify="space-between">

          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Redeem
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
