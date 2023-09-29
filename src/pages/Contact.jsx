import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className=" my-10">
      <h1 className="text-center text-2xl font-semibold leading-none tracking-tight text-gray-900">
        Feel free to contact me
      </h1>
      <div className="max-w-lg md:max-w-xl lg:max-w-3xl my-10 mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}
