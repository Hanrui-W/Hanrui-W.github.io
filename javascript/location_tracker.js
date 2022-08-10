var visit_count = localStorage.getItem("page_view");
console.log("Number of visitors: ", visit_count)

visit_count = 1;
localStorage.setItem("page_view", visit_count);