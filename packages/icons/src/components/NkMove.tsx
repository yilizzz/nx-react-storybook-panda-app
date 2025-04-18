import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkMove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="move"><path id="Vector" d="M5.7 9.3L3 12M3 12L5.7 14.7M3 12H21M9.3 5.7L12 3M12 3L14.7 5.7M12 3V21M14.7 18.3L12 21M12 21L9.3 18.3M18.3 9.3L21 12M21 12L18.3 14.7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkMove);
export default ForwardRef;