import ContactForm from "../components/Contact/ContactForm";
import ContactStaff from "../components/Contact/ContactStaff";

export const Contact = () => {
  return (
    <main>
      <h1>Contact</h1>
      <ContactStaff />
      <section
        style={{
          position: "relative",
          background: "white",
          border: "1px solid black",
          padding: "2rem",
          margin: "1rem",
          borderRadius: ".5rem",
          fontFamily: "Arial",
        }}
      >
        <ContactForm />
      </section>
    </main>
  );
};
