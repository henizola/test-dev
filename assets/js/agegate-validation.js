let cookie_value = document.cookie.split("; ").reduce((prev, current) => {
  const [name, ...value] = current.split("=");
  prev[name] = value.join("=");
  return prev;
}, {});

if (!cookie_value.age_verified) {
  if (window.location.pathname !== "/terms%20and%20conditions.html") {
    if (window.location.pathname !== "/terms%20and%20conditions") {
      alert("none", window.location.pathname);
      window.location.href = "index.html";
    }
  }
  // console.log(window.location, "ola");
  // window.location.href = "index.html";
}
