interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <span className="bg-custom-green/10 text-custom-green rounded-[8px] font-rubik md:text-[20px] text-base font-medium py-1 px-3 w-fit">
      {text}
    </span>
  );
};

export default Badge;
