import { TagTypes } from "../../types";

const H1 = ({text}) => <h1>{text}</h1>

const H2 = ({text}) => <h2>{text}</h2>

const H3 = ({text}) => <h3>{text}</h3>




const Title = ( {title, tag = TagTypes.H2} ) => {
    if (tag === TagTypes.H1) {
        return <H1 text={title} />
    }
    if (tag === TagTypes.H2) {
        return <H2 text={title} />
    }
    return <H3 text={title} />

}

export default Title   