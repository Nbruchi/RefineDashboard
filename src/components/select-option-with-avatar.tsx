import React from 'react';
import {CustomAvatar} from "@/components/custom-avatar";
import {Text} from "@/components/text";

type Props={
    name: string;
    avatarUrl?: string;
    shape?: "square" | "circle";
}
export const SelectOptionWithAvatar = ({avatarUrl,name,shape}:Props) => {
    return (
        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
            <CustomAvatar shape={shape} src={avatarUrl} name={name}/>
            <Text>{name}</Text>
        </div>
    );
};

