import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkArchive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="archive"><path id="Vector" d="M10.5 11.5H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M20 8V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V8M21 8V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V8H21Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkArchive);
export default ForwardRef;