const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");

function fillTemplate() {
    // Load the docx file as binary content
    const content = fs.readFileSync(
        path.resolve(__dirname, "..", "templates", "template1.docx"),
        "binary"
    );
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });

    doc.render({
        name : "xsdxas",
        city : "sdzcsdfcsd"
    //     name: `
    // <w:p>
    //     <w:r>
    //         <w:rPr>
    //             <w:color w:val="FF0000"/>
    //         </w:rPr>
    //         <w:t>
    //             My custom
    //         </w:t>
    //     </w:r>
    //     <w:r>
    //         <w:rPr>
    //             <w:color w:val="00FF00"/>
    //         </w:rPr>
    //         <w:t>
    //             XML paragraph
    //         </w:t>
    //     </w:r>
    // </w:p>
    // `,
    //     city: `
    // <w:p>
    //     <w:r>
    //         <w:rPr>
    //             <w:color w:val="FF0000"/>
    //         </w:rPr>
    //         <w:t>
    //             My custom
    //         </w:t>
    //     </w:r>
    //     <w:r>
    //         <w:rPr>
    //             <w:color w:val="00FF00"/>
    //         </w:rPr>
    //         <w:t>
    //             XML paragraph
    //         </w:t>
    //     </w:r>
    // </w:p>
    // `,
    });

    const buf = doc.getZip().generate({
        type: "nodebuffer",
        compression: "DEFLATE",
    });
    // buf is a nodejs Buffer, you can either write it to a
    // file or res.send it with express for example.
    fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);

}

module.exports = {
    fillTemplate
}