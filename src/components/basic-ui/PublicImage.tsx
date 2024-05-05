type PublicImagePropsType = {
    image?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    src: string;
}

export default function PublicImage({ image, src }: PublicImagePropsType) {
    return <img src={ process.env.PUBLIC_URL + "/assets/images/" + src } alt={ image?.alt }/>;
}