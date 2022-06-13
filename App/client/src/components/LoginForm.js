import Person_Blob from "../img/svg/Person_Blob.svg";

export default function LoginForm() {
  function handleSubmit(ev) {
    ev.preventDefault();
    console.log("het werkt");
  }
  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 pb-20">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src={Person_Blob} alt="Login" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Inloggen
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Of{" "}
          <a
            href="#"
            className="font-medium text-baby-barf-red hover:text-indigo-500"
          >
            Registreer hier
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Wachtwoord
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded text-baby-barf-red"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Onthoud mij
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-baby-barf-pink hover:text-baby-barf-red"
                >
                  Wachtwoord vergeten?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-baby-barf-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-baby-barf-red"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
