import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";

const SignUp = () => {
  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Daftar</h1>
            <p className="mt-2 text-sm text-gray-600">
              Sudah punya akun?
              <Link to="../sign-in">
                <span className="text-primary decoration-2 hover:underline font-medium">
                  Masuk disini
                </span>
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <form>
              <div className="grid gap-y-4">
                <FormInput
                  type="text"
                  htmtFor="notelepon"
                  label="No Telepon"
                  id="notelepon"
                  name="notelepon"
                  placeholder="ex: 08876543212"
                />

                <FormInput
                  type="text"
                  htmtFor="nik"
                  label="NIK"
                  id="nik"
                  name="nik"
                  placeholder="ex: 1234567890987654"
                />

                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="hs-toggle-password"
                      className="block text-sm mb-2"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="hs-toggle-password"
                      type="password"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="ex: Tes123"
                    />
                    <button
                      type="button"
                      data-hs-toggle-password='{
                "target": "#hs-toggle-password"
              }'
                      className="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none"
                    >
                      <svg
                        className="flex-shrink-0 w-3.5 h-3.5 text-gray-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          className="hs-password-active:hidden"
                          d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                        />
                        <path
                          className="hs-password-active:hidden"
                          d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                        />
                        <path
                          className="hs-password-active:hidden"
                          d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                        />
                        <line
                          className="hs-password-active:hidden"
                          x1="2"
                          x2="22"
                          y1="2"
                          y2="22"
                        />
                        <path
                          className="hidden hs-password-active:block"
                          d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                        />
                        <circle
                          className="hidden hs-password-active:block"
                          cx="12"
                          cy="12"
                          r="3"
                        />
                      </svg>
                    </button>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="password-error"
                    >
                      8+ characters required
                    </p>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="hs-toggle-confirm-password"
                    className="block text-sm mb-2"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="hs-toggle-confirm-password"
                      type="password"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="ex: Tes123"
                    />
                    <button
                      type="button"
                      data-hs-toggle-password='{
                "target": "#hs-toggle-confirm-password"
              }'
                      className="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none"
                    >
                      <PiEyeSlashLight className="flex-shrink-0 w-3.5 h-3.5 text-gray-400 hs-password-active:hidden" />
                      <PiEyeLight className="flex-shrink-0 w-3.5 h-3.5 text-gray-400 hidden hs-password-active:block" />
                    </button>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="password-error"
                    >
                      8+ characters required
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white disabled:opacity-50 disabled:pointer-events-none"
                >
                  Daftar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
