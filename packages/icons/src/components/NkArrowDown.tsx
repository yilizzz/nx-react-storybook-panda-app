import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="arrow-down"><path id="Vector" d="M12 4.5L12 19.5M12 19.5L6 13.875M12 19.5L18 13.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkArrowDown);
export default ForwardRef;