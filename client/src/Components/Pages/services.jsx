const Services = () => {
  return (
    <div className="flex-col grid grid-cols-2">
      <div className=" 	relative float-right w-1/2 h-screen hidden lg:block p-2 m-2 ">
        <img
          src="https://images.unsplash.com/photo-1525328302834-764f32276842?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder Image"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="lg:max-w-xl lg:pr-5 lg:pl-3  relative z-40 top-40">
        <h2 class="mb-6 max-w-lg text-6xl font-light leading-snug tracking-tight text-g1 sm:text-5xl sm:leading-snug">
          Create & Plan your
          <span class="my-1 inline-block  px-4 font-bold text-g4 animate__animated animate__flash">
            Future
          </span>
          like you want it
        </h2>
        <p class="text-base text-gray-00">
          Planning your future event is a significant milestone, and we are here
          to guide you every step of the way. Our experienced event planners are
          ready to provide insights, answer questions, and offer support to
          ensure that your vision seamlessly transforms into reality.
        </p>
        <div class="mt-10 flex flex-col items-center md:flex-row">
          <a
            href="/"
            class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-[#32342c] px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-[#5e693f] focus:outline-none md:mr-4 md:mb-0 md:w-auto"
          >
            View More
          </a>
          <a
            href="/"
            aria-label=""
            class="group inline-flex items-center font-semibold text-g1"
          >
            Plan
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className=" 	relative float-right w-1/2 h-screen hidden lg:block p-2 m-2">
        <img
          src="https://images.unsplash.com/photo-1612599542558-f3022089fb38?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder Image"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="lg:max-w-xl lg:pr-5 lg:pl-3  relative z-40 top-40">
        <h2 class="mb-6 max-w-lg text-6xl font-light leading-snug tracking-tight text-g1 sm:text-5xl sm:leading-snug">
          Guidance Every Step of the Way.
        </h2>
        <p class="text-base text-gray-00">
          Embark on a journey of creativity and possibilities. With our
          innovative event planning tools, you have the freedom to imagine and
          create the perfect celebration. From dreamy weddings to milestone
          parties, the power to shape your future event lies at your fingertips.
        </p>
        <div class="mt-10 flex flex-col items-center md:flex-row">
          <a
            href="/"
            class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-[#32342c] px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-[#5e693f] focus:outline-none md:mr-4 md:mb-0 md:w-auto"
          >
            View More
          </a>
          <a
            href="/"
            aria-label=""
            class="group inline-flex items-center font-semibold text-g1"
          >
            Plan
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Services;
