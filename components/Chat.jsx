import SendbirdApp from '@sendbird/uikit-react/App';
const APP_ID = "3B486C39-F79C-4CB0-AA86-57356460BC2E";
const USER_ID = "nk";

const Chat = () => (
    <div style={{ height: "100vh", width: "100vw" }}>
        <SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
);

export default Chat;
