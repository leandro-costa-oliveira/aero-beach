import { Image } from "react-bootstrap";
import defaltAvatar from "../../assets/img/Avatar.jpeg"
import { useState } from "react";

export function Avatar (props: React.HTMLAttributes<HTMLImageElement>){
    const [avatar, _] = useState<Base64URLString>(defaltAvatar)


    return(
        <Image {...props} src={avatar} roundedCircle height={40}/>
    );
};