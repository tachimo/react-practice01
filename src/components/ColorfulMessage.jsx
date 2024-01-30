export const ColorfulMessage = (prop) => {
  const { color, children } = prop;
  const contentStyleA = {
    color,
    fontSize: "20px",
  };

  return <p style={contentStyleA}>{children}</p>;
};
