export default function GetStartedButton () {
  return (
    <button className={`h-9 py-5 px-6 mr-4 rounded-md flex flex-col justify-center text-content-dark hover:text-content-light
    bg-primary hover:bg-success-dark`}>
      <p className={`text-xl`}>Get Started</p>
    </button>
  );
}