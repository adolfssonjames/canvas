import { ContactForm } from "../components/Contact/ContactForm";
import ContactStaff from "../components/Contact/ContactStaff";
import FaqAccordion from "../components/FaqAccordion";

export const Contact = () => {
  return (
    <main className="pt-24">
      <h2 className="text-3xl">Contact</h2>
      <ContactStaff />
      <section className="flex items-center justify-center flex-col">
        <ContactForm />
      </section>
      <FaqAccordion />
    </main>
  );
};
