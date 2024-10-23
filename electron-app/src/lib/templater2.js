const fs = require("fs")
const path = require('path')
const {  patchDocument, PatchType, TextRun } = require("docx");


function run(info) {
    console.log(info)
    patchDocument({
        outputType: "nodebuffer",
        data: fs.readFileSync(path.join(__dirname, '..', 'templates', "template1.docx")),
        patches: {
            name: {
                type: PatchType.PARAGRAPH,
                children: [new TextRun({
                    text: info.name,
                    underline : true
                })],


            },
            city: {
                type: PatchType.PARAGRAPH,
                children: [new TextRun({
                    text: info.city,
                    underline : false,
                    bold: true
                })],


            },
        },
    }).then((doc) => {
        fs.writeFileSync(path.join(__dirname, "..", "result", "My Document.docx"), doc);
    });

}

module.exports = {
    run
}