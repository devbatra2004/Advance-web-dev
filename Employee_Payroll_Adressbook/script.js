document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    e.target.closest("tr").remove();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-edit")) {
    const row = e.target.closest("tr");
    const data = [...row.children].map(td => td.innerText);

    localStorage.setItem("editData", JSON.stringify({
      fullname: data[0],
      address: data[1],
      city: data[2],
      state: data[3],
      zip: data[4],
      phone: data[5]
    }));

    window.location.href = "edit-person.html";
  }
});