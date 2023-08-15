export function CustomerDetails() {
  return (
    <>
      <label> Name </label>
      <input autoFocus required type="text" />
      <label> Email </label>
      <input required type="email" />
      <label> Phone </label>
      <input type="tel" />
    </>
  );
}
