export const scrollToTitleId = (titleId:string) => { 
    document.getElementById(titleId)?.scrollIntoView({ behavior: "smooth" });
}