const quickrefs = require('../_data/quickrefs');

module.exports = function(name) {
    const content = quickrefs[name];

    return `
    <div class="card">
        <img class="card-img-top" src="${ content.featuredImg }" alt="featured image for ${content.displayName}">
        <div class="card-body">
            <h4 class="card-title">${ content.displayName }</h4>
            <p class="card-text">${ content.description }</p>
            <hr>
            <div class="row row-cols-1 row-cols-xl-2">
                <div class="col col-xl-4">
                    <h5>Menu</h5>
                </div>
                <div class="col col-xl-8 d-flex flex-column flex-xl-row gap-2">
                    <div><img src="${content.ui.icon}" alt="Icon for ${content.displayName}"></div>
                    <p>${content.ui.menu}</p>
                </div>
            </div>
            <hr>
            <div class="row row-cols-1 row-cols-xl-2">
                <div class="col col-xl-4">
                    <h5>Hotkeys</h5>
                </div>
                <div class="col col-xl-8 d-flex flex-column flex-xl-row gap-2 align-items-baseline">
                    <p><kbd>${content.hotkeys.pc}</kbd> / <kbd>${content.hotkeys.mac}</kbd></p>
                </div>
            </div>
            <hr>
            <div class="row row-cols-1 row-cols-xl-2">
                <div class="col col-xl-4">
                    <h5>Works with</h5>
                </div>
                <div class="col col-xl-8 d-flex flex-column flex-xl-row gap-2">
                    <div>
                        <p class="badge text-bg-primary">${content.compatibility}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}