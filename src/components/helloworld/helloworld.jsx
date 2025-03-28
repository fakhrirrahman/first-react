export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld text="ini object hello world" />
      <ContentHelloWorld />
      <FooterHelloWorld />
    </div>
  );
}

function HeaderHelloWorld({ text }) {
  const headerStyle = {
    color: "red",
    backgroundColor: "blue",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    margin: "0",
    fontFamily: "Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  return (
    <div>
      <h1 style={headerStyle}>{text.toLowerCase()}</h1>
    </div>
  );
}

function ContentHelloWorld() {
  return (
    <div>
      <p>Ini adalah content dari Hello World</p>
    </div>
  );
}

function FooterHelloWorld() {
  return (
    <div>
      <p>Ini adalah footer dari Hello World</p>
    </div>
  );
}
