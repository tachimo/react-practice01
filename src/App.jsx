import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const onClickButton = () => alert();

  const contentStyleB = {
    color: "green",
    fontSize: "20px",
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage />
      <p style={contentStyleB}>お元気です!</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
