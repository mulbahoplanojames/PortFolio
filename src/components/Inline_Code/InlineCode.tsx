import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const InlineCode = () => {
  const codeString = `
      function calculateArea(width, height) {
        return width * height;
    }
  `;

  return (
    <>
      <div className="max-w-2xl md:min-w-[30rem] min-w-[20rem] bg-[#3a404d] rounded-md overflow-hidden ">
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          customStyle={{ padding: "1rem" }}
          wrapLongLines={true}
          // useInlineStyles={false}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default InlineCode;
