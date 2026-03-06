const Account = () => {
  return (
    <div className="container">
      <h2>Account Settings</h2>

      <div className="profile">
        <img src="https://i.pravatar.cc/150?img=3" alt="profile" />

        <div>
          <h3>Mike</h3>
          <p>Mike@example.com</p>
        </div>
      </div>

      <p className="desc">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
      </p>
    </div>
  );
};

export default Account;