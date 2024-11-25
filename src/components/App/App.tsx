import Main from '../../pages/Main/Main.tsx';

type TAppProps = {
  placesCount: number;
};

function App({ placesCount }: TAppProps) {
  return <Main placesCount={placesCount} />;
}

export default App;
