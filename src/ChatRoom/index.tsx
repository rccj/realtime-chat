const ChatRoom = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-screen text-gray-800 antialiased">
        <div className="flex h-full w-full flex-row overflow-x-hidden">
          <div className="flex h-full flex-auto flex-col p-6">
            <div className="flex h-full flex-auto flex-shrink-0 flex-col rounded-2xl bg-gray-100 p-4">
              <div className="mb-4 flex h-full flex-col overflow-x-auto">
                <div className="flex h-full flex-col">
                  <div className="grid grid-cols-12 gap-y-2">
                    <div className="col-start-1 col-end-8 rounded-lg p-3">
                      <div className="flex flex-row items-center">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-200">
                          A
                        </div>
                        <div className="relative ml-3 rounded-xl bg-white py-2 px-4 text-sm shadow">
                          <div>Hey, How are you today?</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-6 col-end-13 rounded-lg p-3">
                      <div className="flex flex-row-reverse items-center justify-start">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-600">
                          R
                        </div>
                        <div className="relative mr-3 rounded-xl bg-indigo-100 py-2 px-4 text-sm shadow">
                          <div>{`I'm ok what about you?`}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-10 w-full flex-row items-center rounded-xl">
                <input className="flex h-10 w-full flex-row items-center rounded-xl bg-white px-4 focus:border-white"></input>
                <div className="ml-4">
                  <button className="flex flex-shrink-0 items-center justify-center rounded-xl bg-sky-600 px-4 py-1 text-white hover:bg-sky-700">
                    <span>Send</span>
                    <span className="ml-2">
                      <svg
                        className="-mt-px h-4 w-4 rotate-45 transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
