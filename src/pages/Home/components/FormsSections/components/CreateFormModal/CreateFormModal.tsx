import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";

type CreateFormModalProps = {
  isOpen: boolean;
  onClose(): void;
};

export function CreateFormModal({ isOpen, onClose }: CreateFormModalProps) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>
          <Heading as="p" size="lg">
            Create form
          </Heading>
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <form>
            <Flex direction="column" gap={5}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input />
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea />
              </FormControl>
            </Flex>
          </form>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>

            <Button
              colorScheme="green"
              loadingText="Saving"
              spinnerPlacement="end"
              isLoading
              onClick={onClose}
            >
              Save
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
