export const scrollToTitleId = (titleId: string) => { 
    const headerAppClass = document?.getElementById("header-app")?.classList;
    headerAppClass?.add("auto-scroll");
    document.getElementById(titleId)?.scrollIntoView({ behavior: "smooth" });
}