export function ContactForm() {
  return (
    <main className="flex flex-col shadow-xl shadow-black-400 rounded-xl p-14 bg-emerald-600/60 text-white shadow-lg shadow-emerald-600/70 m-10">
      <div className="flex flex-col">
        <label className="px-4"> Namn* </label>
        <input
          className=" bg-white text-center rounded h-8 text-black border-white border-2 focus:outline-none focus:border-amber-200 "
          autoFocus
          required
          type="text"
        />
      </div>
      <section className="flex flex-row pt-10 gap-4 flex-wrap items-center justify-center">
        <div className="flex flex-col">
          <label className=""> E-postadress* </label>
          <input
            className="bg-white text-center rounded h-8 text-black border-white border-2 focus:outline-none focus:border-amber-200"
            required
            type="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-4"> Telefonnummer </label>
          <input
            className="bg-white text-center rounded h-8 text-black border-white border-2 focus:outline-none focus:border-amber-200"
            type="tel"
          />
        </div>
      </section>
      <div className="flex flex-col justify-center items-center mt-6">
        <label>Ämne</label>
        <select className=" w-full h-8 flex rounded items-center justify-center w-80 text-black border-white border-2 focus:outline-none focus:border-amber-200 ">
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
        <textarea className=" w-full h-24 text-center bg-white rounded text-black border-white border-2 focus:outline-none focus:border-amber-200" />
      </div>
    </main>
  );
}
