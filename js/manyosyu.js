import Waka from "./model/waka.js"


$(() => {
    let res = $.ajax({
        url: "sample.xml",
        dataType: "xml"
    })
    res.done((x, h, f) => {
        $("main").html('')
        const xml = $(x)
        console.log(xml)
        let volumeNo = x.querySelector("manyosyu volume")

        const volume = x.querySelector("manyosyu volume title caption")
        const main = $("main")
        //         $("h1").text(volume.textContent)
        $('h1').text('第' + digit2kan(volumeNo.getAttribute("no"), 1) + '巻')
        const ptemo = x.querySelectorAll("manyosyu volume poem")
        let poems = []
        for (let i = 0; i < ptemo.length; i++) {
            let c = new Waka(ptemo[i],digit2kan)
            console.log(c)
            poems.push(c)
            $("main").append(c.render())
        }
    })
    res.fail((e, t, x) => {
        console.log(e)

    })
})