const quickrefs = require('../../_data/quickrefs.json');

module.exports = function(name) {
    const qr = quickrefs[name];
    // This bit where I create the strings for the loops separately feels weird, but it's working and I'll come back to it... eventually
    let pcHotkey = "";
    qr.hotkeys.pc.forEach(element => {
        pcHotkey += `<kbd>${element}</kbd>`;
    });

    let macHotkey = "";
    qr.hotkeys.mac.forEach(element => {
        macHotkey += `<kbd>${element}</kbd>`;
    });

    let compatibility = "";
    qr.compatibility.forEach(element => {
        compatibility += `<a href="#"><span class="badge text-bg-primary">${element}</span></a>`
    })

    let related = "";
    qr.related.forEach(element => {
        related += `<a href="#"><span class="badge text-bg-primary">${element}</span></a>`
    })

    let tags = "";
    qr.tags.forEach(element => {
        tags += `<a href="#"><span class="badge text-bg-primary">${element}</span></a>`
    })
    
    // return Object.keys(qr);
    // return `name: ${qr.displayName}`;    

    return `
    <div class="card shadow">
    <img src="${qr.featuredImg}" alt="${qr.displayName} featured image" class="card-img-top">
    <div class="card-body">
        <h4 class="card-title">${qr.displayName}</h4>
        <p class="card-text">${qr.description}</p>
        <div class="row g-3">
            <div class="col-12 col-xxl-6">
                <h5>UI</h5>
                <div class="d-flex gap-2">
                    <img src="${qr.ui.icon}" alt="icon for ${qr.displayName}">
                    <p class="fw-bold mb-0">${qr.ui.menu}</p>
                </div>
            </div>

            <div class="col-12 col-xxl-6">
                <h5>Hotkeys</h5>
                <div class="d-flex gap-2">
                    <div id="pcHotkeys">
                        ${pcHotkey}
                    </div>
                    <p class="mb-0">/</p>
                    <div id="macHotkeys">
                        ${macHotkey}
                    </div>
                </div>
            </div>

            <div class="col-12 col-xxl-6">
                <h5>Compatibility</h5>
                <div class="d-flex gap-2">
                    ${compatibility}
                </div>
            </div>
            
            <div class="col-12 col-xxl-6">
                <h5>Related</h5>
                <div class="d-flex gap-2">
                    ${related}
                </div>
            </div>
     
            <div class="col-12">
                <h5>Tags</h5>
                <div class="d-flex flex-wrap gap-2">
                    ${tags}
                </div>
            </div>

        </div>

        <a href="${qr.link}" class="btn btn-primary d-block mt-3">See more</a>
    </div>

    <div class="card-footer">
    Last changed: ${qr.lastModified}
    </div>

    </div>

    `
}