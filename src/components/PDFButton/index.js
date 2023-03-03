import Curriculo from "../../assets/pdfs/Diego's-Resume.pdf"

import PDFStyle from "./style"

const PDFButton = () => {
    return (
        <PDFStyle href={Curriculo} target="_blank" rel="noreferrer" download>
            <img src={ require("../../assets/images/pdf-icon.png")} alt="Currículo" />
        </PDFStyle>
    )
}

export default PDFButton
