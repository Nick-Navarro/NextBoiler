import React from "react";
import { RouteHandler } from "@/middleware/RouteHandler";

// Local files
import { Header } from "@/components/global/Header";

export const AppLayout: React.FC<{ authority: number; layoutClass?: string }> =
  (props) => {
    const { children, authority, layoutClass = `` } = props;

    return (
      <RouteHandler authority={authority}>
        <div className={`main-wrapper ${layoutClass}`}>
          <Header />

          {children}
        </div>
      </RouteHandler>
    );
  };
