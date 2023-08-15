import ContactForm from "../components/ContactForm";

export const Contact = () => {
  return (
    <main>
      <h1>Contact</h1>
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
        <div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};
