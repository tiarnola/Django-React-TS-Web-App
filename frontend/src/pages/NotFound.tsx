export const NotFound = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen overflow-y-scroll">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              404 Not Found
            </h1>
            <h3 className="text-center font-bold leading-tight tracking-tight text-gray-900   dark:text-white">
              The page you're looking for doesn't exist!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
