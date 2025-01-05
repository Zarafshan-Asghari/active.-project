function Title(props) {
  return (
    <h2 className="text-4xl text-slate-800 font-semibold max-w-sm capitalize">
      <span className="text-lg">{props.text1}</span>
      <br />
      <span className="mb-4">{props.text2}</span>
    </h2>
  );
}

export default Title;
