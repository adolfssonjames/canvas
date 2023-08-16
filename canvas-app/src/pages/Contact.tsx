import { ContactForm } from "../components/Contact/ContactForm";
import ContactStaff from "../components/Contact/ContactStaff";
import FaqAccordion from "../components/FaqAccordion";

export const Contact = () => {
  return (
    <main>
      <h1>Contact</h1>
      <ContactStaff />
      <section className="flex items-center justify-center flex-col">
        <ContactForm />
      </section>
      <FaqAccordion />
    </main>
  );
};
