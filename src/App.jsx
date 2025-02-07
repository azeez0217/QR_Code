import { useState } from "react";
import QRCode from "react-qr-code";
import Input from "./assets/util/Input";
import Button from "./assets/util/Button";

function App() {
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [show, setShow] = useState(false);
  const codeGenerator = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCode(text);
    setText("");
    setShow(!show);
  };
  const [bool, setBool] = useState(false);
  const [message, setMessage] = useState("");
  const feedBack = (val) => {
    debugger;
    setBool(!bool);
    setMessage(val);
  };

  const backToNormal = () => {
    setBool(!bool);
    setShow(!show);
  };
  return (
    <>
      <div className="mt-20 mx-4">
        <div className="w-md shadow-xl shadow-blue-300 h-auto p-5 rounded-md mx-auto">
          <h1 className="text-xl text-center font-bold uppercase">
            QR Code Generator
          </h1>

          <div className="text-center mt-8 mx-auto">
            <QRCode value={code} className="mx-auto" />
          </div>
          <div className="mt-5 text-center ">
            <form
              className="shadow-md px-3 py-3 mx-3 rounded-md shadow-blue-300 gap-4"
              onSubmit={codeGenerator}
            >
              <Input
                type="text"
                className="py-1 px-2 font-medium border-2 rounded border-blue-500"
                name="valueName"
                value={text}
                placeholder="Enter a word to generate"
                change={(e) => setText(e.target.value)}
              />
              <Input
                type="submit"
                className="py-1 px-3 font-medium mx-3 bg-blue-900 text-white cursor-pointer rounded hover:bg-blue-600"
                value="Submit"
              />
            </form>
          </div>
          {show && (
            <div>
              {!bool ? (
                <div className="mt-5">
                  <h3 className="mx-4 font-medium">
                    Please scan and check if you are receiving the code.
                    <ul className="list-disc mx-5">
                      <li> If yes, please click the Yes button; </li>
                      <li>if no, please click the No button.</li>
                    </ul>
                  </h3>
                  <div className="mx-4 flex gap-6 mt-3">
                    <Button
                      text="Yes"
                      className="px-3 py-1 bg-green-700 text-white rounded hover:bg-green-800 font-semibold text-md cursor-pointer"
                      click={() => feedBack("yes")}
                    />
                    <Button
                      text="No"
                      className="px-3 py-1 bg-red-700 text-white rounded hover:bg-red-800 font-semibold text-md cursor-pointer"
                      click={() => feedBack("no")}
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-5">
                  <div>
                    {message.toLowerCase() === "yes" ? (
                      <p className="text-md text-green-700 font-semibold text-center">
                        Thank you for your response. Have a good day!
                      </p>
                    ) : (
                      <p className="text-md text-red-700 font-semibold text-center">
                        We apologize for the inconvenience. We will be back
                        shortly.
                      </p>
                    )}
                  </div>
                  <div className="text-center mt-3">
                    <Button
                      text="Back"
                      className="px-3 py-1 bg-blue-700 text-white rounded hover:bg-blue-800 font-semibold text-md cursor-pointer"
                      click={backToNormal}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
