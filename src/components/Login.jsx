import { useNavigate } from "react-router-dom";

export default function Login() {
  const Navigate = useNavigate();

  function Klik() {
    Navigate("/Menu");
  }

  return (
    <div className="bg-bg h-screen w-full bg-cover bg-center flex items-center justify-center">
      <form className="max-w-sm mx-auto mt-32">
        <div className="card rounded-lg bg-black bg-opacity-70">
          <div className="mb-5 px-11 py-10">
            <h1 className="text-center text-white text-2xl mb-8 font-semibold">Registrasi</h1>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder=""
              required
            />
            <label
              for="password"
              className="mt-3 block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="mt-3 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
            <label
              for="repeat-password"
              className="mt-3 block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="repeat-password"
              className="mt-3 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
            <input
              id="terms"
              type="checkbox"
              value=""
              className="cw-4 h-4 border mt-3 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
            <label
              for="terms"
              className="ms-2 text-sm font-medium text-white dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-[#569EBD] hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
            </label>
            <a href="/Menu"><button onClick={Klik}
              type="submit"
              className="mb-5 mt-3 text-white bg-[#569EBD] hover:bg-[#0e7490] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register new account
            </button></a>
          </div>
        </div>
      </form>
    </div>
  );
}