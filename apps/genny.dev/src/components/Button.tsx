// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Button({ children, ...props }: any) {
  return (
    <div className="bt-button-1" {...props}>
      {children}
    </div>
  );
}

export default Button;
