import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkPercentage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="percentage"><path id="Vector" d="M19 5L5 19M17.5 20C19.1667 20 20 19.1429 20 17C20 14.8571 19.1667 14 17.5 14C15.8333 14 15 14.8571 15 17C15 19.1429 15.8333 20 17.5 20ZM6.5 10C8.16667 10 9 9.14286 9 7C9 4.85714 8.16667 4 6.5 4C4.83333 4 4 4.85714 4 7C4 9.14286 4.83333 10 6.5 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkPercentage);
export default ForwardRef;