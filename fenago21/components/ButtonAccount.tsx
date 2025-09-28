/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
// import { useSession, signOut } from "next-auth/react";
import apiClient from "@/libs/api";

// A button to show user some account actions
// It's used in the Navbar (components/Header.js)
const ButtonAccount = () => {
  // const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  // This is used to display different states of the button when user is not logged in, loading, or logged in.
  // You can use it if you want to display different states.
  // if (status === "loading") {
  //   return (
  //     <div className="btn btn-ghost btn-sm btn-circle animate-pulse"></div>
  //   );
  // }

  // if (status === "unauthenticated") {
  //   return (
  //     <div className="flex items-center gap-2 shrink-0">
  //       <ButtonSignin extraStyle="btn-sm" />
  //     </div>
  //   );
  // }

  const handleSignOut = async () => {
    setIsLoading(true);
    // await signOut({ callbackUrl: "/" });
    setIsLoading(false);
  };

  const handleBilling = async () => {
    setIsLoading(true);

    try {
      const { url }: { url: string } = await apiClient.post(
        "/stripe/create-portal",
        {
          returnUrl: window.location.href,
        }
      );

      window.location.href = url;
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  // Temporary: show disabled state since auth is disabled
  return (
    <div className="flex items-center gap-2 shrink-0">
      <div className="btn btn-ghost btn-sm btn-circle opacity-50 cursor-not-allowed">
        <span className="w-6 h-6 bg-base-300 flex justify-center items-center rounded-full shrink-0">
          ?
        </span>
      </div>
    </div>
  );

  // Original authenticated user UI (commented out)
  /*
  return (
    <Popover className="relative z-10">
      {({ open }) => (
        <>
          <Popover.Button className="btn btn-ghost btn-sm btn-circle">
            {session?.user?.image ? (
              <img
                src={session?.user?.image}
                alt={session?.user?.name || "Account"}
                className="w-6 h-6 rounded-full shrink-0"
                referrerPolicy="no-referrer"
                width={24}
                height={24}
              />
            ) : (
              <span className="w-6 h-6 bg-base-300 flex justify-center items-center rounded-full shrink-0">
                {session?.user?.name?.charAt(0) ||
                  session?.user?.email?.charAt(0)}
              </span>
            )}
          </Popover.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute left-0 z-10 mt-3 w-screen max-w-[16rem] transform">
              <div className="overflow-hidden rounded-xl bg-base-100 shadow-xl ring-1 ring-base-content ring-opacity-5">
                <div className="relative bg-base-100">
                  <div className="flex items-center gap-4 p-4">
                    <div>
                      {session?.user?.image ? (
                        <img
                          src={session?.user?.image}
                          alt={session?.user?.name || "Account"}
                          className="w-10 h-10 rounded-full shrink-0"
                          referrerPolicy="no-referrer"
                          width={40}
                          height={40}
                        />
                      ) : (
                        <span className="w-10 h-10 bg-base-300 flex justify-center items-center rounded-full shrink-0">
                          {session?.user?.name?.charAt(0) ||
                            session?.user?.email?.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col truncate">
                      {session?.user?.name && (
                        <p className="text-sm font-medium text-base-content truncate">
                          {session?.user?.name}
                        </p>
                      )}
                      <p className="text-sm text-base-content-secondary truncate">
                        {session?.user?.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1 p-2">
                  <button
                    className="flex items-center gap-2 hover:bg-base-200 duration-200 py-1.5 px-2 rounded-lg font-medium text-sm"
                    onClick={handleBilling}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Billing
                  </button>
                  <button
                    className="flex items-center gap-2 hover:bg-error hover:text-error-content duration-200 py-1.5 px-2 rounded-lg font-medium text-sm"
                    onClick={handleSignOut}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114L8.704 10.75H18.25A.75.75 0 0019 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
  */
};

export default ButtonAccount;
