import "./components_style/Button.css";
export default function Button({
  colorName,
  children = "SHOP NOW",
  href = "#",
  ...props
}) {
  return (
    <a className={`button ${colorName}`} href={href}>
      {children}
    </a>
  );
}