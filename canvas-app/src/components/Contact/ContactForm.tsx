export function ContactForm() {
  return (
    <main className="flex flex-col shadow-xl shadow-black-400 rounded p-10 bg-zinc-600/50 text-white">
      <div className="flex flex-col">
        <label className="px-4"> Namn* </label>
        <input
          className="bg-teal-300/50 text-center rounded h-8 text-white"
          autoFocus
          required
          type="text"
        />
      </div>
      <section className="flex flex-row pt-16 gap-4 flex-wrap items-center justify-center">
        <div className="flex flex-col">
          <label className="px-4"> E-postadress* </label>
          <input
            className="bg-teal-300/50 text-center rounded h-8 text-white"
            required
            type="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-4"> Telefonnummer </label>
          <input
            className="bg-teal-300/50 text-center rounded h-8 text-white"
            type="tel"
          />
        </div>
      </section>
      <div className="flex flex-col justify-center items-center mt-6">
        <label>Ämne</label>
        <select className="h-6 flex items-center justify-center w-80 bg-teal-300/50 text-white">
          <option value="" disabled selected hidden>
            Vad gäller ditt ärende?
          </option>
          <option value="tjejkväll">Boka Tjejkväll</option>
          <option>Boka garderobrensning</option>
          <option>Rådfråga</option>
          <option>Annat</option>
        </select>
      </div>
      <div className=" mt-4 ">
        <label> Meddelande* </label>
        <br></br>
        <textarea className=" w-80 bg-teal-300/50 text-white" />
      </div>
    </main>
  );
}
