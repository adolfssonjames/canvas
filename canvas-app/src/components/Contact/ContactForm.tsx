export function ContactForm() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-row pt-16 gap-4 flex-wrap items-center justify-center">
        <div className="flex flex-col">
          <label className="px-4"> Namn </label>
          <input
            placeholder="Ditt namn"
            className="bg-slate-200 text-center rounded h-8"
            autoFocus
            required
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-4"> Email </label>
          <input
            placeholder=" din e-post adress"
            className="bg-slate-200 text-center rounded h-8"
            required
            type="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-4"> Telefon (valfritt) </label>
          <input
            placeholder="Ditt nummer"
            className="bg-slate-200 text-center rounded h-8"
            type="tel"
          />
        </div>
      </section>
      <div className="flex flex-col justify-center items-center mt-6">
        <label>Ämne</label>
        <select className="h-6 flex items-center justify-center w-80">
          <option value="" disabled selected hidden>
            Vad gäller ditt ärende?
          </option>
          <option value="tjejkväll">Boka Tjejkväll</option>
          <option>Boka garderobrensning</option>
          <option>Rådfråga</option>
          <option>Annat</option>
        </select>
      </div>
      <div className=" mt-4">
        <label> Vänligen skriv ditt meddelande till oss nedan </label>
        <br></br>
        <textarea className="bg-slate-200 w-80" />
      </div>
    </main>
  );
}
