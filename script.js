function toggleMode() {
    const html = document.documentElement;

    // if (html.classList.contains("light")) {
    //     html.classList.remove("light");
    // } else {
    //     html.classList.add("light");
    // }
    html.classList.toggle("light");

    //pegar a tag img
    const img = document.querySelector("#profile img");

    if (html.classList.contains("light")) {
        //if light-mode, add image-theme-light
        img.setAttribute("src", "./assets/avatar-theme-light.png");
        img.setAttribute("alt", "Uma imagem de Edward Elric no putasso-mode");
    } else {
        //else, manter image-theme-dark
        img.setAttribute("src", "./assets/avatar-theme-dark.png");
        img.setAttribute("alt", "Uma imagem de Edward Elric no sigma-mode");
    }
}
