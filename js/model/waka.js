export default class Waka {
    format = (n) => { return n }
    constructor(poem, callback) {
        if (callback != undefined) {
            this.format = callback
        }
        for (let i = 0; i < poem.children.length; i++) {
            const elem = poem.children[i]
            this[elem.tagName] = elem.innerHTML
        }
    }
    render() {
        let result = $("<section></section>").addClass("poem").attr("id", this.pno)

        let nav = $("<nav></nav>").addClass("popup")
        nav.append($("<p></p>").addClass("pno").html(this.format(this.pno, 1)))
        nav.append($("<p></p>").addClass("baloon").append($("<span></span>").text(this.pno)))

        let div = $("<div></div>")
        div.append($("<h2></h2>").addClass("mkana").addClass("gyosyo").html(this.mkana))
        div.append($("<p></p>").append($("<img>").attr("src", this.image)))
        div.append($("<p></p>").addClass("poet").addClass("gyosyo").html(this.poet))
        div.append($("<p></p>").addClass("yomi").addClass("gendai").html(this.yomi))
        div.append($("<p></p>").addClass("mean").addClass("gendai").html(this.mean))
        if (this.supplement != undefined){
            div.append($("<p></p>").addClass("supplement").addClass("gendai").html(this.supplement))
        }

        // 
        result.append(nav)
        result.append(div)

        return result
    }
}