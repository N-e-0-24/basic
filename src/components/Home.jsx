import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [email,setemail] = useState("");
  const navigate = useNavigate();
  const handleSubmit2 = () => {

    navigate("/thankYou");
  }
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center ">
        <form action="post">
          <div className="max-w-sm rounded-3xl p-px">
            <div className="rounded-[2px]  ">
              <div>
                <h1 className="text-4xl ml-4 font-bold bg-gradient-to-r from-blue-700 to-amber-500 bg-clip-text text-transparent  ">
                  Coming Soon!
                </h1>
              </div>

              <div className="mt-8 space-y-8">
                <div className="flex">
                  <div className="space-y-6">
                    <input
                      className="w-full bg-transparent text-gray-900  dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 invalid:border-red-500 dark:placeholder-gray-900"
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="email"
                      
                     
                    />
                  </div>
                  <button  onClick={handleSubmit2} className="h-9 px-2 mx-2 bg-gradient-to-r from-blue-700 to-amber-500 transition duration-500 rounded-md text-white">
                    Notify Me
                  </button></div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-gray-900">office@avinyainfinitysolutions.com</a>
                  <p className="leading-normal my-5">
                    RP3H+VFM
                    <br />
                    Kanjikode, Kerala 678623
                  </p>

                  <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">

                    <a
                      href="https://instagram.com/avinya_infinity_official?igshid=YmMyMTA2M2Y=="
                      className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Instagram page</span>
                    </a>
                    <a
                      href="/"
                      className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                      <span className="sr-only">Twitter page</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/avinya-infinity-solutions-pvt-ltd/"
                      className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" /></svg>
                      <span className="sr-only">LinkedIn Account</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home;
