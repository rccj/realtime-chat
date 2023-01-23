export enum PositionEnum {
  Left,
  Right,
}

interface IChatMessage {
  position: PositionEnum;
  content: string;
  userInfo: {
    name: string;
    avatar: React.ReactNode;
  };
}

const ChatMessage = ({
  position = PositionEnum.Left,
  content,
  userInfo,
}: IChatMessage) => {
  const isLeft = position === PositionEnum.Left;

  return (
    <div
      className={` rounded-lg p-3 ${
        isLeft ? 'col-start-1 col-end-8' : 'col-start-6 col-end-13 '
      }`}
    >
      <div
        className={`flex items-center ${
          isLeft ? 'flex-row' : 'flex-row-reverse '
        }`}
      >
        <div className="mx-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-200">
          {userInfo.name[0]}
        </div>
        <div className="relative rounded-xl bg-white py-2 px-4 text-sm shadow">
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
