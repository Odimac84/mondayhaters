

const Button = (props) => {
  const { label } = props;

  return (
    <button className="bg-gold text-white font-bold py-2 px-4 rounded-full">{label}</button>
  )
};

export default Button;