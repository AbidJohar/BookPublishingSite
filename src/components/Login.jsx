 import Header from './Header'
 import Footer from './Footer'
const Login = () => {
  return (
    <>
    {/* Assuming you have a Header component to include */}
    <Header />

    <div className="container mx-auto pl-3 py-8 flex flex-row">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <h1 className="text-2xl font-semibold text-center p-4">Sign In</h1>
        <form className="px-2 py-8" action="/userlogin" method="post">
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control block w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              name="username"
              autoComplete="off"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control block w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
              name="password"
              autoComplete="off"
            />
          </div>
          <a className="text-blue-800 text-sm inline-block mb-4" href="#">
            Forget password
          </a>
          <div className="flex items-center justify-between mb-14">
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-indigo-500 text-white font-semibold tracking-tighter hover:bg-indigo-700"
            >
              Login
            </button>
            <p className="text-md text-gray-500 ml-4">
              Do not have an account?
              <a
                href="/usersignup"
                className="text-sm text-blue-700 hover:text-blue-800 ml-1"
              >
                Register here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>

    {/* Assuming you have a Footer component to include */}
    <Footer />
  </>
  )
}

export default Login
