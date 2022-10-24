
export default function Padre({children}) {

  console.log(children);
  return (
    <div>
      Hola {children}
    </div>
  );
}
