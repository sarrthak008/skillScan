

const AppButton = ({ title = "default title", variant = "default" }) => {
  const BUTTON_VARIANT = {
    default: "bg-yellow-400",
    error: "bg-red-400",
    success: "bg-green-400",
  };

  const appliedVariant = BUTTON_VARIANT[variant] || BUTTON_VARIANT.default;

  return (
    <button
      className={`${appliedVariant} cursor-pointer py-1.5 px-8 rounded-md text-black text-xl hover:bg-amber-500`}
    >
      {title}
    </button>
  );
};

export default AppButton;