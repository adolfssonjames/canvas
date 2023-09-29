const staffMembers = [
  {
    name: "Ulrika",
    role: "Grundare & säljare",
    email: "Ulrika@Mail.com",
    phone: "+46 73 111 11 11",
    imageSrc: "images/testname2.jpg",
  },
  {
    name: "Carina",
    role: "Grundare & säljare",
    email: "Carina@Mail.com",
    phone: "+46 73 222 22 22",
    imageSrc: "images/testname1.jpg",
  },
];

// Create a StaffMember component
function StaffMember({ name, role, email, phone, imageSrc }: any) {
  return (
    <div className="h-96 pl-5 pr-5 flex items-center justify-center flex-col rounded-xl gap-2">
      <img
        className="relative h-auto w-52 rounded-full drop-shadow-md mb-5"
        src={imageSrc}
        alt={`Profile-picture of ${name}`}
      />
      <div className="flex flex-col relative bg-white/70 rounded-xl p-4">
        <h2 className="text-3xl relative">{name}</h2>
        <p className="text-lg font-medium">{role}</p>
        <a className="relative" href={`mailto:${email}`}>
          {email}
        </a>
        <a className="relative" href={`tel:${phone}`}>
          {phone}
        </a>
      </div>
    </div>
  );
}

export default function ContactStaff() {
  return (
    <section className="flex flex-row items-center justify-center gap-20 pt-16 pb-10 flex-wrap">
      {staffMembers.map((staff, index) => (
        <StaffMember key={index} {...staff} />
      ))}
    </section>
  );
}
