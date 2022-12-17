interface Styles {
  email: string;
  styles?: string;
}

const Button = ({ styles, email }: Styles) => {
  return (
    <button
      onClick={() => window.open(`mailto:${email}`)}
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      Email me
    </button>
  );
};

export default Button;
