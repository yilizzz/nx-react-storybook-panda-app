import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkSpinnerOne = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="spinner-one"><path id="Vector" d="M12 3V6M12 21V18M4.20577 16.5L6.80385 15M21 12H18M16.5 19.7942L15 17.1962M3 12H6M7.5 4.20577L9 6.80385M7.5 19.7942L9 17.1962M19.7942 16.5L17.1962 15M4.20577 7.5L6.80385 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkSpinnerOne);
export default ForwardRef;