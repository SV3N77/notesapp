import Head from "next/head";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <SignInForm />
    </main>
  );
}

// Internal components

function SignInForm() {
  return (
    <div className="w-full max-w-xs py-10">
      <form className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-yellow-500 py-2 px-4 font-bold text-white hover:bg-yellow-700 focus:outline-none"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline text-sm font-bold text-yellow-500 hover:text-yellow-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <a
            className="inline-block text-center align-baseline text-sm font-bold text-yellow-500 hover:text-yellow-800"
            href=""
          >
            Create new account
          </a>
        </div>
      </form>
    </div>
  );
}
