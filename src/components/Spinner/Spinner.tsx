// Importing the CirclesWithBar component from the react-loader-spinner library
import { Grid } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#00324b"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
};

export default Spinner;
