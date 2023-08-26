export default function ContactStaff() {
  return (
    <section className=" flex flex-row items-center justify-center gap-20 pt-16 pb-10 flex-wrap ">
      <div className=" h-96 pl-5 pr-5 flex items-center justify-center flex-col rounded-xl gap-2 ">
        <img
          className="relative h-auto w-52 rounded-full drop-shadow-md mb-5"
          src="public/images/ulrikaprofilvit1.jpg"
          alt="Profile-picture"
        />
        <div className="flex flex-col relative bg-white/70 rounded-xl p-4  ">
          <h2 className="text-3xl relative">Ulrika</h2>
          <p className="text-lg font-medium"> Grundare & säljare </p>
          <a className=" relative" href="mailto: Ulrika@Mail.com">
            Ulrika@Mail.com
          </a>
          <a className=" relative" href="tel:0123456789">
            +46 73 111 11 11
          </a>
        </div>
      </div>

      <div className="h-96 pl-5 pr-5 flex items-center justify-center flex-col rounded-xl gap-2">
        <img
          className="relative h-auto w-52 rounded-full drop-shadow-md mb-5"
          src="public/images/carinaprofilvit1.jpg"
          alt="Profile-picture"
        />
        <div className="flex flex-col relative bg-white/70 rounded-xl p-4">
          <h2 className="text-3xl relative">Carina</h2>
          <p className="text-lg font-medium"> Grundare & säljare </p>
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
