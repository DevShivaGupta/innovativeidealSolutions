import { Modal, Input, Textarea, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
export default function ModalMail({ title, opened, setOpened, enquiry }) {
  const formSubmit = useRef();
  const form = useForm({
    initialValues: {
      user_name: "",
      user_email: "",
      user_phone: "",
      from_name: "Request A Quote",
      user_companyname: "",
      message: "",
    },

    validate: {
      user_name: (value) =>
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(value)
          ? null
          : "Invalid Name",
      user_phone: (value) =>
        /^[0-9]{10}$/.test(value) ? null : "Invalid Phone Number",
      user_email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid Email"),
    },
  });
  const closeForm = () => {
    form.resetTouched();
    form.resetDirty();
    form.reset();
    setOpened(false);
  };
  const submitForm = (e) => {
    form.validate();
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5ssa6g9",
        "template_zgnrbqb",
        formSubmit.current,
        "Vm3cKuYrFlD1TvtML"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    closeForm();
  };
  return (
    <>
      <Modal
        opened={opened}
        onClose={closeForm}
        title={<b>{title}</b>}
        centered
        transition="fade"
        transitionDuration={300}
        transitionTimingFunction="ease"
      >
        <form ref={formSubmit} onSubmit={submitForm}>
          <Input.Wrapper label="Name" required error={form.errors.user_name}>
            <Input
              placeholder="Your Name"
              name="user_name"
              {...form.getInputProps("user_name")}
              radius="xs"
            />
          </Input.Wrapper>
          <Input.Wrapper
            label="Email"
            required
            mt={10}
            error={form.errors.user_email}
          >
            <Input
              placeholder="Your Email"
              {...form.getInputProps("user_email")}
              radius="xs"
              name="user_email"
            />
          </Input.Wrapper>
          <Input.Wrapper
            label="Mobile"
            required
            error={form.errors.user_phone}
            mt={10}
          >
            <Input
              placeholder="Your Mobile"
              {...form.getInputProps("user_phone")}
              name="user_phone"
              radius="xs"
            />
          </Input.Wrapper>
          <Input.Wrapper label="Company Name" required mt={10}>
            <Input
              placeholder="Your Company Name"
              {...form.getInputProps("user_companyname")}
              radius="xs"
              name="user_companyname"
            />
          </Input.Wrapper>
          {enquiry && (
            <Input.Wrapper label="Enquiry For" required mt={10}>
              <Input
                component="button"
                radius="xs"
                {...form.getInputProps("from_name")}
                name="from_name"
                value={enquiry}
              >
                {enquiry}
              </Input>
            </Input.Wrapper>
          )}
          <Textarea
            placeholder="Your Message"
            label="Message"
            withAsterisk
            autosize
            name="message"
            required
            {...form.getInputProps("message")}
            minRows={3}
            mt={10}
          />
          <Button
            radius="xs"
            uppercase
            variant="gradient"
            mt={20}
            px={40}
            gradient={{ from: "blue", to: "cyan" }}
            color="cyan"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Modal>
      
    </>
  );
}
