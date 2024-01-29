import React, { PropsWithChildren } from "react";
import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import Header from "./header";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <ThemedLayoutV2
            Header={Header}
            Title={(titleProps) => (
                <ThemedTitleV2 text="Refine" {...titleProps} />
            )}
        >
            {children}
        </ThemedLayoutV2>
    );
};

export default Layout;
