export default function ProjectCard() {
  return (
    <>
      {/*<!-- Component: Horizontal card--> */}
      <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img
            src="https://picsum.photos/id/118/800/600"
            alt="project preview image"
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <div>
              <h3 className="text-xl font-medium text-slate-700">
                Project Title
              </h3>
            </div>
          </header>
          <p>
            After a walk through history, there is nothing left to do but admire
            the hypnotizing landscapes that exist in every direction. From vast
            deserts to rainbow mountains, and everything in between.
          </p>
        </div>
      </div>
      {/*<!-- End Horizontal card--> */}
    </>
  );
}
