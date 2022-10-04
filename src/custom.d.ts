declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.pdf";
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}