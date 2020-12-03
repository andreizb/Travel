function getTarget(element) {
    var target_id = element.target;
    var target = document.getElementById("article-dest").shadowRoot.getElementById(target_id);
    target.scrollIntoView();
}

export { getTarget };
