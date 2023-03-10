import { useState, useRef } from 'react';
import ChatMessage, { PositionEnum } from '@/pages/ChatRoom/ChatMessage';
import IconMdiSend from '~icons/mdi/send';

const defaultMessageInfos = [
  {
    id: '1',
    position: PositionEnum.Left,
    content: 'Hey, How are you today?',
    userInfo: { name: 'Other', avatar: '' },
  },
  {
    id: '2',
    position: PositionEnum.Right,
    content: "I'm ok what about you?",
    userInfo: { name: 'Roman', avatar: '' },
  },
];

const ChatRoom = () => {
  const [messageInfos, setMessageInfos] = useState(defaultMessageInfos);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrolltoBottom = () => {
    const scrollHeight = scrollRef.current?.scrollHeight ?? 0;
    scrollRef.current?.scrollTo(0, scrollHeight);
  };

  const sendMessage = async () => {
    const rondomNumber = window.crypto.randomUUID();
    await setMessageInfos([
      ...messageInfos,
      {
        id: rondomNumber,
        position: PositionEnum.Right,
        content: "I'm ok what about you? ",
        userInfo: { name: 'Roman', avatar: '' },
      },
    ]);
    scrolltoBottom();
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-screen text-gray-800 antialiased">
        <div className="flex h-full w-full flex-row overflow-x-hidden">
          <div className="flex h-full flex-auto flex-col p-6">
            <div className="flex h-full flex-auto flex-shrink-0 flex-col rounded-2xl bg-gray-100 p-4">
              <div ref={scrollRef} className="mb-4 flex h-full flex-col overflow-x-auto ">
                <div className="flex h-full flex-col">
                  <div className="grid grid-cols-12 gap-y-2">
                    {messageInfos.map((item) => (
                      <ChatMessage
                        key={item.id}
                        position={item.position}
                        content={item.content}
                        userInfo={item.userInfo}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex h-10 w-full flex-row items-center rounded-xl">
                <input className="flex h-10 w-full flex-row items-center rounded-xl bg-white px-4 focus:border-white"></input>
                <div className="ml-4">
                  <button
                    onClick={sendMessage}
                    className="flex flex-shrink-0 items-center justify-center rounded-xl bg-sky-600 px-4 py-1 text-white hover:bg-sky-700"
                  >
                    <span>Send</span>
                    <span className="ml-2">
                      <IconMdiSend />
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
