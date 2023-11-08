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

export function CreateFormModal({ onClose, isOpen }: CreateFormModalProps) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading as={"p"} size={"lg"}>
            Create form
          </Heading>
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <form>
            <Flex direction={"column"} gap={5}>
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
            <Button onClick={onClose} variant={"ghost"}>
              Cancel
            </Button>

            <Button
              colorScheme="green"
              isLoading
              loadingText="Saving"
              onClick={onClose}
              spinnerPlacement="end"
            >
              Save
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
