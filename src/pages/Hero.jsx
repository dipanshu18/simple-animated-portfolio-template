export default function Hero() {
  return (
    <>
      <div className="my-10 mx-10 lg:grid lg:grid-cols-3 min-h-screen bg-base-200">
        <div className="lg:col-span-1 lg:py-10">
          <h1 className="mb-8 text-center text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              John Doe
            </span>
          </h1>
          <div>
            <img
              className="w-48 rounded-full mx-auto"
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Your Candid Profile Pic"
            />
          </div>
        </div>
        <div className="lg:mt-3 lg:col-span-2 text-center lg:text-left p-5 lg:p-10">
          <p className="text-lg font-normal text-gray-500 lg:text-xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            dolorem recusandae optio reprehenderit. Ea sapiente cupiditate
            harum, cum quia eius voluptate numquam maxime. Beatae dignissimos
            mollitia veniam reiciendis optio quo. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Quos dolorem recusandae optio
            reprehenderit. Ea sapiente cupiditate harum, cum quia eius voluptate
            numquam maxime. Beatae dignissimos mollitia veniam reiciendis optio
            quo.
          </p>
        </div>
      </div>
    </>
  );
}
