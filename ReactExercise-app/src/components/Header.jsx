export default function Header({title, text, image}) {
  return (
    <header>
      <img src={image} alt="Stylized atom" />
      <h1>
        {title}
      </h1>
      <p>{text}</p>
    </header>
  );
}
