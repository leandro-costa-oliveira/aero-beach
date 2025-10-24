import { Image } from "react-bootstrap";
import defaltAvatar from "../../assets/img/Avatar.jpeg"

export function Avatar (props: React.HTMLAttributes<HTMLImageElement>){
    return(
        <Image {...props} src={defaltAvatar} roundedCircle height={36}/>
    );
};