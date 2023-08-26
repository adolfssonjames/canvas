import { ContactForm } from "../components/Contact/ContactForm";
import ContactStaff from "../components/Contact/ContactStaff";
import FaqAccordion from "../components/FaqAccordion";

export const Contact = () => {
  return (
    <main className="pt-24 scroll-smooth">
      <article>
        <h2 className="text-3xl">Kontakt</h2>
        <p className="font-medium">
          För att göra en bokning, tryck på knappen nedan och fyll i formuläret.
        </p>
      </article>

      <a href="#section2">Gå till Bokningsformulär</a>

      <ContactStaff />
      <section className="flex items-center justify-center flex-col">
        <div className="border-b-2 border-slate-100 w-1/2 m-5"></div>
        <p className="font-medium" id="section2">
          Har du en fråga eller vill göra en bokning? Fyll i formuläret nedan.
          Eller kontakta oss via telefon.
        </p>
        <ContactForm />
      </section>
      <FaqAccordion />
    </main>
  );
};
