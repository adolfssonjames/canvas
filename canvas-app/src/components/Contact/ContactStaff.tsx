export default function ContactStaff() {
  return (
    <section className=" flex flex-row items-center justify-center gap-20 pt-16 pb-10">
      <div className="flex items-center justify-center flex-col bg-emerald-600/60 rounded-xl gap-40">
        <img
          className="h-96 object-scale-down rounded-md absolute  "
          src="public/images/pawel-czerwinski-KWpm9MmEo2s-unsplash.jpg"
          alt="banner image"
        />
        <img src="" alt="Profile-picture" />
        <div className="flex flex-col relative bg-white/70 rounded p-4 ">
          <h2 className="text-3xl relative">Ulrika</h2>
          <a className=" relative" href="mailto: Ulrika@Mail.com">
            Ulrika@Mail.com
          </a>
          <a className=" relative" href="tel:0123456789">
            +46 73 111 11 11
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col bg-emerald-600/60 rounded-xl gap-40 m-20">
        <img
          className="h-96 object-scale-down rounded-md absolute "
          src="public/images/pawel-czerwinski-KWpm9MmEo2s-unsplash.jpg"
          alt="banner image"
        />
        <img src="" alt="Profile-picture" />
        <div className="flex flex-col relative bg-white/70 rounded p-4">
          <h2 className="text-3xl relative">Carina</h2>
          <a className=" relative" href="mailto: Ulrika@Mail.com">
            Ulrika@Mail.com
          </a>
          <a className=" relative" href="tel:0123456789">
            +46 73 111 11 11
          </a>
        </div>
      </div>
    </section>
  );
}
