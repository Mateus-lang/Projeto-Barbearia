import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="px-5 py-8 justify-between items-center flex flex-row">
            <Image src="/Logo.png" alt="fsw barber" height={18} width={120}/>
            <Button variant="outline" size="icon" className="h-8 w-8">
                <MenuIcon size={18} />
            </Button>
            </CardContent>
        </Card>
     );
};
 
export default Header;