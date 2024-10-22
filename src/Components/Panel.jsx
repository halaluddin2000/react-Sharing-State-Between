import "../style.css";
export default function Panel({ title, children, isActive, onShow }) {
  return (
    <section>
      <h1 className="titleCss">{title}</h1>
      {isActive ? (
        <p className="childCss">{children}</p>
      ) : (
        <button className="btn" onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
