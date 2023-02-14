module.exports = function (pathToImg, caption) {
    return `
    <figure class="figure">
    <img src="${pathToImg}" class="figure-img img-fluid rounded" alt="${caption}">
    <figcaption class="figure-caption">${caption}</figcaption>
    </figure>
    `
}