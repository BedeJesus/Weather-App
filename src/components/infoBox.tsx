import { Wind, SunHorizon, SunDim, Drop, CloudArrowDown, Eye } from "phosphor-react";
import type { IconProps } from "phosphor-react"; // Importante para tipagem
import { useState } from "react";

const iconMap: { [key: string]: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> } = {
    Wind: Wind,
    SunHorizon: SunHorizon,
    SunDim: SunDim,
    Drop: Drop,
    CloudArrowDown: CloudArrowDown,
    Eye: Eye,
};

interface Props {
    label: string;
    icon: string;
    value: number;
}

export default function infoBox(props: Props) {

    const IconComponent = iconMap[props.icon];

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (

        <div className="group w-2xl h-20 font-sans" onClick={handleFlip}>
            <div
                className={`relative h-full w-full text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
    
                <div className="absolute flex h-full w-full flex-col justify-center rounded-2xl border shadow-[0_8px_14px_0_rgba(0,0,0,0.2)] [backface-visibility:hidden] ">
                     <p className="flex text-center text-2xl justify-center "><IconComponent/></p>
                     <p className="text-xs">{props.label}</p>
                 </div>
                 <div className="absolute flex h-full w-full flex-col justify-center rounded-2xl border  [backface-visibility:hidden] [transform:rotateY(180deg)] ">
                     <p>{props.value}</p>
                 </div>
             </div>
         </div>


    )
}
