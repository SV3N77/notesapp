export default function Header() {
  return (
    <div className="flex p-8 text-neutral-700">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-sans text-3xl font-bold">Notes App</h1>
        <div className="flex gap-4">
          <button
            className="focus:shadow-outline rounded bg-yellow-500 py-2 px-4 font-bold text-white hover:bg-yellow-700 focus:outline-none"
            type="button"
          >
            Sign In
          </button>
          <button
            className="focus:shadow-outline rounded bg-yellow-500 py-2 px-4 font-bold text-white hover:bg-yellow-700 focus:outline-none"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
