export default function ContactStaff() {
  return (
    <section className=" flex flex-row items-center justify-center gap-20 pt-16">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-3xl ">Ulrika</h2>
        <img src="" alt="Profile-picture" />
        <a href="mailto: Ulrika@Mail.com">Ulrika@Mail.com</a>
        <a href="tel:0123456789">+46 73 111 11 11</a>
      </div>
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-3xl ">Carina</h2>
        <img src="" alt="Profile-picture" />
        <a href="mailto: Carina@Mail.com">Carina@Mail.com</a>
        <a href="tel:0123456789">+46 73 111 11 11</a>
      </div>
    </section>
  );
}
