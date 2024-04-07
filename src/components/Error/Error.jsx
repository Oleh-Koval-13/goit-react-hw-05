export default function Error({ message }) {
    return (
      <p className="text">
        Something went wrong! <br />
        Message: {message}. <br />
        Please, try again later!
      </p>
    );
  }