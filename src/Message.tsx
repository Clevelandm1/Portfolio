function Message() {
  const name = "Cleveland";

  if (name) {
    return (
      <>
        <h1>Hello {name}</h1>
      </>
    ); //JSX: JavaScript XML
  }
  return <h1>Hello Nobody</h1>;
}

export default Message;
